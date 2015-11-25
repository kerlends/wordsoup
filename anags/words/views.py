from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from words.solver import SolverForm


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@csrf_exempt
def solve(request, rack):
    form = SolverForm({'rack': rack})

    if form.is_valid():
        data = form.solve()['data']
        return JSONResponse(data)
