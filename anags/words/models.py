from django.db import models
from .options import BEAR_OPTIONS


class Word(models.Model):
    word = models.CharField(max_length=50)

    def __str__(self):
        return self.word


class Bonus(models.Model):
    bonus_for = models.CharField(choices=BEAR_OPTIONS, max_length=5)
    bonus = models.CharField(max_length=500)


class Bear(models.Model):
    name = models.CharField(max_length=50, unique=True)
    bonus = models.ManyToManyField(Bonus)

    def __str__(self):
        return self.name
