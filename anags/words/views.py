from time import time
from django.shortcuts import render
from words.forms import RackForm
from words.anagrams import words_find
from words.utils import word_sort, query_filter
from words.models import Word


def index(request):
    context = {'form': RackForm()}
    if request.method == 'POST':
        start_time = time()
        form = RackForm(request.POST)
        if form.is_valid():
            word_rack = word_sort(request.POST['rack'])
            query, exclude = query_filter(word_rack)
            flat_query_set = Word.objects.exclude(exclude)\
                .filter(query)\
                .distinct()\
                .values_list('word', 'charlist', 'length')
            data = words_find(word_rack, flat_query_set)

            final_time = time()
            total = round(final_time - start_time, 4)

            context['data'] = data
            context['rack_str'] = word_rack.upper()
            context['time_taken'] = total

    return render(request, 'words/index.html', context)
