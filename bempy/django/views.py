# -*- coding: utf-8 -*-
import os.path

from django.http import HttpResponse
from django.conf import settings
from functools import wraps
from bempy import ImmediateResponse


def returns_blocks(func):
    @wraps(func)
    def wrapper(request, *args, **kwargs):
        page = func(request, *args, **kwargs)

        try:
            if isinstance(page, HttpResponse):
                return page
            else:
                response = HttpResponse(page('render',
                                             request=request,
                                             js_filename='bempy.js',
                                             css_filename='bempy.css'))
            return response
        except ImmediateResponse as e:
            return e.response
    wrapper.block = func
    return wrapper
