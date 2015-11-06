from collections import Counter, OrderedDict


def get_words(rack, WORDS):
    my_words = {}
    rack_list = list(rack.lower())
    c1 = Counter(rack_list)

    for word in WORDS:
        word_list = list(word)
        word_list.sort()
        c2 = Counter(word_list)
        same = c1 & c2
        samel = list(same.elements())
        samel.sort()
        if samel == word_list:
            w_index = len(word)
            try:
                my_words[w_index].append(word)
            except:
                my_words[w_index] = [word]

    my_words = filter_words(my_words)
    its = list(my_words.items())
    its.reverse()
    my_words = OrderedDict(its)

    return my_words


def filter_words(words):
    for k, v in words.items():
        if len(v) > 6 and k < 5:
            words[k] = v[:6]

    return words
