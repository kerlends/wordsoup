from extra.scrabble import score_card
from api.models import Word


def fill_status(count, total):
    msg = "{} of {} imported ({}%)"
    percentage = int(100 * (count/total))
    print(msg.format(count, total, percentage), end="\r")


def fill_db():
    count = 0
    with open('extra/twl06.txt') as f:
        words = f.read().split()
        total = len(words)

    for w in words:
        Word.objects.create(
            word=w,
            charsort=''.join(sorted(w)),
            length=len(w),
            charlist=list(w),
            scrabble_points=score_card(w)
        )

        count += 1
        fill_status(count, total)
