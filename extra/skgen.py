import string
import random


def _punctuation():
    return string.punctuation.replace(
        '\'', '').replace('""', '').replace('\\', '')
punctuation = _punctuation()


def alphanum_list():
    return [string.ascii_letters, string.digits, punctuation]


def generate():
    alphas = ''.join(alphanum_list())
    chars = [random.SystemRandom().choice(alphas) for i in range(50)]
    return ''.join(chars)
