from celery import task
from django.utils import timezone
from analytics.models import Event, Entry


@task
def update_latest_event(ip):
    entry, new = Entry.objects.get_or_create(ip_address=ip)
    print(entry)
    time_diff = timezone.now() - entry.last_recorded_request

    if time_diff.seconds > 60 * 60:
        entry = Entry.objects.create()

    Event.objects.create(entry=entry)
