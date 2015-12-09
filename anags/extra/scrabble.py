SCORES = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3,
          1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]
LETTERS = list('abcdefghijklmnopqrstuvwxyz')

LETTER_SCORES = dict(zip(LETTERS, SCORES))


def score_card(word):
    return sum([LETTER_SCORES[c] for c in word])
