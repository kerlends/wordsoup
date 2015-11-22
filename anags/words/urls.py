from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^(?P<rack>[A-Za-z]+)/$', views.solve),
]
