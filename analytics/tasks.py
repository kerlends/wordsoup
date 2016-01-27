from __future__ import absolute_import

from celery import task
from django.utils import timezone
from analytics.models import RequestEvent


@task
def update_latest_event():
    event = RequestEvent.objects.last()
    time_diff = timezone.now() - event.last_recorded_request

    if time_diff.seconds > 60 * 1:
        RequestEvent.objects.create()

    else:
        event.increment()
