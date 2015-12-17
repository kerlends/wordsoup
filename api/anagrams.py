from collections import Counter
from django.db.models import Q
from api.models import Word


legal_chars = list('abcdefghjiklmnopqrstvuwxyz')


def limit_results(words, limit):
    for k, v in words.items():
        if len(v) > limit:
            words[k] = v[:limit]

    return words


def words_find(rack, all_words, limit):
    my_words = {}
    c1 = Counter(rack.lower())

    for word, length, char_list, points in all_words:
        c2 = Counter(word)
        same = sorted((c1 & c2).elements())
        if same == char_list:
            my_words.setdefault(length, []).append((word, points))

    if limit:
        my_words = limit_results(my_words, limit)

    items = sorted(my_words.items(), reverse=True)

    return {'data': [
        {'count': key, 'words': val, 'num': len(val)} for key, val in items
    ]}


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
