from collections import Counter, OrderedDict


def words_find(rack, WORDS):
    my_words = {}
    c1 = Counter(rack.lower())

    for word, char_list, length in WORDS:
        c2 = Counter(word)
        same = sorted((c1 & c2).elements())
        if same == char_list:
            my_words.setdefault(length, []).append(word)

    my_words = limit_results(my_words)

    return OrderedDict(sorted(my_words.items(), reverse=True))


def limit_results(words):
    for k, v in words.items():
        if len(v) > 6 and k < 5:
            words[k] = v[:6]

    return words
