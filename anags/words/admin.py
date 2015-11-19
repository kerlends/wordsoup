from django.contrib import admin
from .models import Word


class WordAdmin(admin.ModelAdmin):
    list_display = ('word', 'charsort', 'length')
    fields = ('word', 'charsort', 'length', )
    readonly_fields = ('charsort', 'length')
    search_fields = ('word', 'length')


admin.site.register(Word, WordAdmin)
