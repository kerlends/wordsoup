from django.core.management.base import BaseCommand, CommandError
from extra.scrabble import score_card
from api.models import Word


def prep_objects():
    with open('extra/twl06.txt') as f:
        words = f.read().split()

    return [
        Word(word=w, charsort=''.join(sorted(w)), length=len(w),
             charlist=sorted(w), scrabble_points=score_card(w))
        for w in words
    ]


def create():
    objs = prep_objects()
    Word.objects.bulk_create(objs)


class Command(BaseCommand):
    help = 'Sets up and inserts all appropriate words into the table'

    def handle(self, *args, **options):
        create()
        count = Word.objects.all().count()
        self.stdout.write(self.style.SUCCESS(
            'Successfully loaded all {} words.'.format(count)
        ))
