from django.db import models
from django.utils import timezone


class APIEvent(models.Model):
    first_recorded_at = models.DateTimeField(auto_now_add=True)
    last_recorded_request = models.DateTimeField(auto_now_add=True)
    count = models.IntegerField(default=1)

    def __str__(self):
        return "{} (counts: {})".format(
            self.first_recorded_at.strftime('%d/%m/%Y %H:%M:%s'),
            self.count
        )

    def increment(self):
        self.count += 1
        self.last_recorded_request = timezone.now()
        self.save()
