from django.db.models import Q


legal_chars = list('abcdefghjiklmnopqrstvuwxyz')


def word_sort(chars):
    w_list = list(chars.lower())
    w_list.sort()
    return "".join([c for c in w_list if c in legal_chars])


def query_chain(rack):
    rack = rack[::]
    return Q(length__lte=len(rack)) &\
        Q(charsort__startswith=rack[0]) &\
        Q(letters__letter__in=rack)


def query_exclude(rack):
    disclude = sorted(set(legal_chars) - set(rack))
    queries = [Q(word__contains=x) for x in disclude]
    query = queries.pop()
    while queries:
        query |= queries.pop()

    return query


def query_filter(rack):
    all_letters = sorted(rack)
    query = query_chain(all_letters)
    del all_letters[0]
    while all_letters:
        query |= query_chain(all_letters)
        del all_letters[0]

    return query, query_exclude(rack)
