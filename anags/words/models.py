from django.db import models
from .options import BEAR_OPTIONS


class Letter(models.Model):
    letter = models.CharField(max_length=1)

    def __str__(self):
        return self.letter


class Word(models.Model):
    word = models.CharField(max_length=50)
    charsort = models.CharField(max_length=50, blank=True)
    length = models.PositiveIntegerField(blank=True, null=True)
    letters = models.ManyToManyField(Letter, blank=True, related_name='words')

    def __str__(self):
        return self.word

    def save(self, *args, **kwargs):
        if not self.charsort:
            w_sort = list(self.word)
            w_sort.sort()
            self.charsort = "".join(w_sort)

        if not self.length:
            self.length = len(self.word)

        if not self.letters.all().count() > 0:
            letters = Letter.objects.filter(letter__in=self.word)
            self.letters.add(*letters)

        super(Word, self).save(*args, **kwargs)
