from django.db import models
from django.contrib.postgres.fields import ArrayField
from extra.scrabble import score_card


BONUS_TYPES = (
    ('1', 'Multiplier'),
    ('2', 'Additional points'),
)


class Word(models.Model):
    word = models.CharField(max_length=50)
    charsort = models.CharField(max_length=50, editable=False, null=True)
    length = models.PositiveIntegerField(editable=False, null=True)
    scrabble_points = models.PositiveIntegerField(editable=False, null=True)
    charlist = ArrayField(
        models.CharField(max_length=25, blank=True),
        size=25,
        default=list,
        editable=False
    )

    def __str__(self):
        return self.word

    def save(self, *args, **kwargs):
        if not self.charsort:
            self.charsort = "".join(sorted(self.word))

        if not self.length:
            self.length = len(self.word)

        if not self.charlist:
            self.charlist = list(self.charsort)

        if not self.scrabble_points:
            self.scrabble_points = score_card(self.word)

        super(Word, self).save(*args, **kwargs)


class Bear(models.Model):
    name = models.CharField(max_length=50)
    bonus_type = models.CharField(max_length=1, choices=BONUS_TYPES)
    bonus_for = ArrayField(
        models.CharField(max_length=25, blank=True),
        size=25,
        default=list,
    )
