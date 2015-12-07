from collections import Counter


def words_find(rack, WORDS, limit):
    my_words = {}
    c1 = Counter(rack.lower())

    for word, char_list, length in WORDS:
        c2 = Counter(word)
        same = sorted((c1 & c2).elements())
        if same == char_list:
            my_words.setdefault(length, []).append(word)

    if limit:
        my_words = limit_results(my_words, limit)

    its = sorted(my_words.items())
    its.reverse()

    return {'data': [
        {'count': key, 'words': val, 'num': len(val)} for key, val in its
    ]}


def limit_results(words, limit):
    for k, v in words.items():
        if len(v) > limit:
            words[k] = v[:limit]

    return words
