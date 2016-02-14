import json

from collections import Counter
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.anagrams import query_to_results
from analytics.tasks import update_latest_event


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@api_view(['GET', 'POST'])
def solve(request):
    if request.method == 'POST':
        data = request.data
        if 'rack' not in data.keys():
            return JSONResponse([])
        results = query_to_results(data['rack'], data['limit'])
        if results:
            update_latest_event.delay(request.META['REMOTE_ADDR'])

        print(results)
        return JSONResponse(results)
