# -*- coding: utf-8 -*-

import os.path

from django.http import HttpResponse
from django.conf import settings


from functools import wraps
from bempy import ImmediateResponse


def returns_blocks(func):
    @wraps(func)
    def wrapper(request):
        page = func(request)
        
        try:
            css = page('get-css')
            filename = func.__name__ + '_blocks.css'
            css_filename = os.path.join(
                settings.BEMPY_STATIC_DIR, filename)
            css_url = os.path.join(
                settings.STATIC_URL, filename)
            with open(css_filename, 'w') as f:
                f.write(u'\n'.join(css))
                
            return HttpResponse(page('render',
                                     request=request,
                                     css_filename=css_url))
        except ImmediateResponse as e:
            return e.response
    return wrapper
