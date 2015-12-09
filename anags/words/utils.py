from collections import Counter
from django.db.models import Q
from words.models import Word
from words.anagrams import words_find


legal_chars = list('abcdefghjiklmnopqrstvuwxyz')


def word_sort(chars):
    w_list = list(chars.lower())
    w_list.sort()
    return "".join([c for c in w_list if c in legal_chars])


def query_chain(rack):
    rack = rack[::]
    return Q(length__lte=len(rack)) &\
        Q(charsort__startswith=rack[0]) &\
        Q(charlist__contained_by=rack)


def query_exclude(rack):
    disclude = sorted(set(legal_chars) - set(rack))
    queries = [Q(word__contains=x) for x in disclude]
    query = queries.pop()
    while queries:
        query |= queries.pop()

    return query


def query_to_results(rack, limit):
    values_list_args = ['word', 'length', 'charlist', 'scrabble_points']

    all_letters = sorted(rack)
    query = query_chain(all_letters)
    del all_letters[0]
    while all_letters:
        query |= query_chain(all_letters)
        del all_letters[0]

    flat_query_set = Word.objects.exclude(query_exclude(rack))\
        .filter(query)\
        .distinct()\
        .values_list(*values_list_args)

    return words_find(rack, flat_query_set, limit)


def rack_diff(rack, word):
    diffd = list((Counter(rack) - Counter(word)).elements())
    return ''.join(diffd)
