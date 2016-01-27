from django.utils import timezone
from analytics.models import APIEvent
from analytics.tasks import *


def update_latest_event():
    event = APIEvent.objects.last()
    time_diff = timezone.now() - event.last_recorded_request

    if time_diff.seconds > 60 * 2:
        APIEvent.objects.create()

    else:
        event.increment()
