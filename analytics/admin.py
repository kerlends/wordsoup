from django.contrib import admin
from analytics.models import APIEvent


class EventAdmin(admin.ModelAdmin):
    list_display = ('first_recorded_at', 'count', 'last_recorded_request')
    readonly_fields = ['first_recorded_at', 'count', 'last_recorded_request']


admin.site.register(APIEvent, EventAdmin)
