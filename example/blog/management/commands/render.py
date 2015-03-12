# -*- coding: utf-8 -*-
from __future__ import absolute_import

import PyV8

from django.conf import settings
from django.core.management.base import BaseCommand


def render(filename):
    print 'rendering', filename
    ctxt = PyV8.JSContext()
    ctxt.enter()
    with open(filename) as f:
        ctxt.eval(f.read())

    page_content = """
        {
                            block : 'button',
                            mods : { theme : 'normal', size : 's'},
       text: "SOME TEXT"
    
                        }
    """

    return ctxt.eval('BEMHTML.apply(%s)' % page_content)


class Command(BaseCommand):
    help = u"""Отправляет в Graphite сигнал о том, что выкачен пакет."""

    def handle(self, *args, **options):
        print render('/home/art/tmp/bem-project/desktop.bundles/blah/blah.bemhtml.js')

