from collections import Counter
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from words.solver import SolverForm
from words.utils import rack_diff


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@api_view(['GET', 'POST'])
def solve(request):
    if request.method == 'GET':
        form = SolverForm({'rack': rack})
        print(request.method)

        if form.is_valid():
            data = form.solve()['data']
            return JSONResponse(data)
    elif request.method == 'POST':
        data = request.data
        if 'rack' in data.keys():
            if 'word' in data.keys():
                refreshed = rack_diff(data['rack'], data['word'])
                form = SolverForm({'rack': refreshed})
            else:
                form = SolverForm({'rack': data['rack']})

            if form.is_valid():
                _raw = form.solve()
                data = _raw['data']
                new_rack = _raw['rack_str']

                return JSONResponse({'solved': data, 'rack': new_rack})
