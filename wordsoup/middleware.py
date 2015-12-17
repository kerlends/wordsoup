from django.http import Http404
from django.conf import settings
from django.core.urlresolvers import (
    reverse, NoReverseMatch)


class InternalOnlyMiddleware(object):
    def process_request(self, request):
        try:
            admin_index = reverse('admin:index')
        except NoReverseMatch:
            return

        if not request.path.startswith(admin_index):
            return

        remote_addr = request.META['REMOTE_ADDR']

        if remote_addr not in settings.INTERNAL_IPS\
                and not settings.DEBUG:
            raise Http404
