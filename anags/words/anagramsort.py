from collections import Counter, OrderedDict


def get_words(rack, WORDS):
    my_words = {}
    c1 = Counter(rack.lower())

    for word in WORDS:
        char_list = sorted(word)
        c2 = Counter(word)
        same = sorted((c1 & c2).elements())
        if same == char_list:
            try:
                my_words[len(word)].append(word)
            except:
                my_words[len(word)] = [word]

    my_words = filter_words(my_words)
    its = sorted(my_words.items())
    its.reverse()
    my_words = OrderedDict(its)

    return my_words


def filter_words(words):
    for k, v in words.items():
        if len(v) > 6 and k < 5:
            words[k] = v[:6]

    return words
