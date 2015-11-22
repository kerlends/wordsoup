from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view
from words.solver import SolverForm
from words.utils import word_sort, query_to_results


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
        data = form.solve()['data']
        return JSONResponse(data)


@api_view(['POST'])
def api(request):
    if request.method == 'POST':
        if 'rack' not in request.data.keys():
            return JSONResponse({'error': 'key not recognized'})
        else:
            rack = request.data['rack']
            return JSONResponse({'results': query_to_results(rack)})
    else:
        return JSONResponse({'error': 'invalid request'})
