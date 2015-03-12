# -*- coding: utf-8 -*-
from __future__ import absolute_import

from django.conf import settings
from django.core.management.base import BaseCommand

from islets import render_to_string

class Command(BaseCommand):
    help = u"""Отправляет в Graphite сигнал о том, что выкачен пакет."""

    def handle(self, *args, **options):
#        template = '/home/art/bempy/islets/index/index.bt.client.js'
        template = '/home/art/bundle.js'
        print render_to_string(template,
                               {'text': 'Default', 'mods': {}, 'block': 'y-button', 'view': 'islet'},
                               {})

