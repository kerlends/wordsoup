from django.db import models
from django.contrib.postgres.fields import ArrayField


class Letter(models.Model):
    letter = models.CharField(max_length=1)

    def __str__(self):
        return self.letter


class Word(models.Model):
    word = models.CharField(max_length=50)
    charsort = models.CharField(max_length=50, blank=True)
    length = models.PositiveIntegerField(blank=True, null=True)
    letters = models.ManyToManyField(Letter, blank=True, related_name='words')
    charlist = ArrayField(
        models.CharField(max_length=25, blank=True),
        size=25,
        default=list
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

        if self.id and not self.letters.all().count() > 0:
            letters = Letter.objects.filter(letter__in=self.word)
            self.letters.add(*letters)

        super(Word, self).save(*args, **kwargs)
