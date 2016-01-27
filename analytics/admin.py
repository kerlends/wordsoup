from django.contrib import admin
from analytics.models import Event, Entry


class EventInline(admin.StackedInline):
    model = Event
    ordering = ('-time_recorded',)
    extra = 0

    def has_add_permission(self, request):
        return False


class EntryAdmin(admin.ModelAdmin):
    inlines = [EventInline]
    list_display = ('ip_address',
                    'first_recorded_at',
                    'last_recorded_request')

    readonly_fields = ['ip_address',
                       'first_recorded_at',
                       'last_recorded_request']

    def has_add_permission(self, request):
        return False


admin.site.register(Entry, EntryAdmin)
