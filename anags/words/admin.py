from django.contrib import admin
from .models import Word, Letter


class WordAdmin(admin.ModelAdmin):
    list_display = ('word', 'charsort', 'length')
    fields = ('word', 'charsort', 'length', 'letters')
    readonly_fields = ('letters', 'charsort', 'length')
    search_fields = ('word', 'length')


class WordInline(admin.TabularInline):
    model = Word.letters.through


class LetterAdmin(admin.ModelAdmin):
    list_display = ('letter',)


admin.site.register(Word, WordAdmin)
admin.site.register(Letter, LetterAdmin)
