from django.shortcuts import render
from words.solver import SolverForm
from words.utils import word_sort


def index(request):
    context = {'form': SolverForm()}
    if request.method == 'POST':
        word_rack = word_sort(request.POST['rack'])
        form = SolverForm({'rack': word_rack})
        if form.is_valid():
            context = form.solve()

    return render(request, 'words/index.html', context)


def solve(request, rack):
    form = SolverForm({'rack': rack})

    if form.is_valid():
        data = form.solve()
        return render(request, 'words/index.html', data)
