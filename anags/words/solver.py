import time
from django import forms
from words.utils import query_to_results


class SolverForm(forms.Form):
    rack = forms.CharField(max_length=100)

    def solve(self):
        start = time.time()
        rack = self.cleaned_data['rack']
        data = query_to_results(rack)
        end = time.time()

        return {'data': data,
                'rack_str': rack.upper(),
                'time_taken': round(end - start, 4)}
