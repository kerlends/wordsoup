from django.shortcuts import render
from .models import Word
from .forms import RackForm
from .anagramsort import get_words
from .utils import word_sort
from time import time


all_words = Word.objects.all()


def index(request):
    context = {'form': RackForm()}
    if request.method == 'POST':
        start_time = time()
        form = RackForm(request.POST)
        if form.is_valid():
            word_rack = word_sort(request.POST['rack'])
            filtered_words = all_words.filter(charsort__startswith=word_rack[0])
            final_words = filtered_words.values_list('word', flat=True)
            data = get_words(word_rack, final_words)

            final_time = time()
            total = round(final_time - start_time, 4)

            context['data'] = data
            context['rack_str'] = word_rack.upper()
            context['time_taken'] = total

    return render(request, 'words/index.html', context)
