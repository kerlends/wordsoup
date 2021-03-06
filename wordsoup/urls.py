from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.prod.html')),
    url(r'^api/', include('api.urls', namespace='api')),
    url(r'^admin/', include(admin.site.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
