from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^solve/(?P<rack>[A-Za-z]+)/$',
        views.solve),
    url(r'^$', views.index, name='index'),
]
