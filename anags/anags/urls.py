from django.views.generic import TemplateView
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^api/', include('words.urls', namespace='wordsoup')),
    url(r'^admin/', include(admin.site.urls)),
]
