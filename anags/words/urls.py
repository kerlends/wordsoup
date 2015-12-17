from django.conf.urls import url
from words import views


urlpatterns = [
    url(r'^solve/$', views.solve, name='solver'),
]
