import json
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from words.solver import SolverForm
from words.utils import word_sort


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

def index(request):
    context = {'form': SolverForm()}
    if request.method == 'POST':
        word_rack = word_sort(request.POST['rack'])
        form = SolverForm({'rack': word_rack})
        if form.is_valid():
            context = form.solve()

    return render(request, 'words/index.html', context)


@csrf_exempt
def solve(request, rack):
    form = SolverForm({'rack': rack})

    if form.is_valid():
        data = json.dumps(form.solve()['data'])
        #return render(request, 'words/index.html', data)
        return JSONResponse(data)
