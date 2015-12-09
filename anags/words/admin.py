from django.contrib import admin
from .models import Word


class WordAdmin(admin.ModelAdmin):
    list_display = ('word', 'charsort', 'length', 'scrabble_points')
    # fields = ('word', 'charsort', 'length')
    # readonly_fields = ('charsort', 'length')
    search_fields = ('word', 'scrabble_points')


admin.site.register(Word, WordAdmin)
