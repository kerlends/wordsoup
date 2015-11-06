from django.shortcuts import render
from .models import Word
from .forms import RackForm
from .anagramsort import get_words


WORDS = Word.objects.all().values_list('word', flat=True)
CHARS = list('abcdefghjiklmnopqrstvuwxyz')

def index(request):
    context = {'form': RackForm()}
    if request.method == 'POST':
        form = RackForm(request.POST)
        if form.is_valid():
            word_rack = request.POST['rack'].lower()
            data = get_words(word_rack, WORDS)
            mr = "".join([c for c in word_rack if c in CHARS])

            context['data'] = data
            context['rack_str'] = mr.upper()

    return render(request, 'words/index.html', context)
