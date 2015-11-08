legal_chars = list('abcdefghjiklmnopqrstvuwxyz')


def word_sort(chars):
    w_list = list(chars.lower())
    w_list.sort()
    return "".join([c for c in w_list if c in legal_chars])
