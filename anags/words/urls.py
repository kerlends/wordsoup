from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^solve/$', views.solve, name='solver'),
]
