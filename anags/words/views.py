import time
from django.shortcuts import render
from words.forms import RackForm
from words.solver import SolverForm
from words.utils import word_sort, query_to_results


def index(request):
    context = {'form': RackForm()}
    if request.method == 'POST':
        start_time = time.time()
        form = RackForm(request.POST)
        if form.is_valid():
            word_rack = word_sort(request.POST['rack'])
            data = query_to_results(word_rack)
            final_time = time.time()
            total = round(final_time - start_time, 4)

            context['data'] = data
            context['rack_str'] = word_rack.upper()
            context['time_taken'] = total

    return render(request, 'words/index.html', context)


def solve(request, rack):
    form = SolverForm({'rack': rack})

    if form.is_valid():
        data = form.solve()
        return render(request, 'words/index.html', data)
