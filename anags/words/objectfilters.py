from .utils import query_filter
from .anagramsort import words_find
from .models import Word


def words(rack):
    query, exclude = query_filter(rack)
    flat_query_set = Word.objects.exclude(exclude)\
        .filter(query)\
        .distinct()\
        .values_list('word', 'charlist', 'length')

    return words_find(rack, flat_query_set)
