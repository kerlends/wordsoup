from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone


class Entry(models.Model):
    ip_address = models.GenericIPAddressField(default="0.0.0.0",
                                              verbose_name='IP Address')
    first_recorded_at = models.DateTimeField(auto_now_add=True)
    last_recorded_request = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_recorded_at.strftime('%d/%m/%Y %H:%M')

    class Meta:
        verbose_name_plural = 'Event entries'
        verbose_name = 'Event entry'


class Event(models.Model):
    time_recorded = models.DateTimeField(auto_now_add=True)
    entry = models.ForeignKey(Entry, related_name='events')

    def __str__(self):
        return self.time_recorded.strftime("%d/%m/%Y %H:%M")


@receiver(post_save, sender=Event, dispatch_uid="update_last_record")
def update_record(sender, instance, **kwargs):
    instance.entry.last_recorded_request = instance.time_recorded
    instance.entry.save()
