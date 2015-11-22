from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^', include('web.urls')),
    url(r'^api/', include('words.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
