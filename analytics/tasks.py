from __future__ import absolute_import

from celery import task
from django.utils import timezone
from analytics.models import APIEvent


@task
def update_latest_event():
    event = APIEvent.objects.last()
    time_diff = timezone.now() - event.last_recorded_request

    if time_diff.seconds > 60 * 1:
        APIEvent.objects.create()

    else:
        event.increment()
