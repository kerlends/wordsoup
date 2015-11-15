from django.shortcuts import render
from .models import Word
from .forms import RackForm
from .anagramsort import get_words
from .utils import word_sort, query_filter
from time import time


def index(request):
    context = {'form': RackForm()}
    if request.method == 'POST':
        start_time = time()
        form = RackForm(request.POST)
        if form.is_valid():
            word_rack = word_sort(request.POST['rack'])
            query, exclude = query_filter(word_rack)
            all_words = Word.objects.exclude(exclude)\
                .filter(query)\
                .distinct()\
                .values_list('word', flat=True)
            data = get_words(word_rack, all_words)
            final_time = time()
            total = round(final_time - start_time, 4)

            context['data'] = data
            context['rack_str'] = word_rack.upper()
            context['time_taken'] = total

    return render(request, 'words/index.html', context)
