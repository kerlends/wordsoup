from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^(?P<rack>[a-zA-Z]+)/$', views.solve, name='solver'),
]
