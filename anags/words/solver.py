import time
from django import forms
from words.utils import query_to_results


class SolverForm(forms.Form):
    rack = forms.CharField(max_length=100, required=False)

    def solve(self, limit=None):
        context = dict()
        start = time.time()
        rack = self.cleaned_data['rack']
        context['data'] = query_to_results(rack, limit)
        context['rack_str'] = rack.lower()
        context['time_taken'] = round(time.time() - start, 4)
        context['form'] = SolverForm()

        return context
