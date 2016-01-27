from django.contrib import admin
from analytics.models import RequestEvent


class EventAdmin(admin.ModelAdmin):
    list_display = ('first_recorded_at', 'count', 'last_recorded_request')
    readonly_fields = ['first_recorded_at', 'count', 'last_recorded_request']

    def has_add_permission(self, request):
        return False


admin.site.register(RequestEvent, EventAdmin)
