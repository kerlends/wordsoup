from django import forms


class RackForm(forms.Form):
    rack = forms.CharField(label='Input letters', max_length=100)
