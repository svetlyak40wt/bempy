import os

from django.contrib import staticfiles

from django.core.urlresolvers import RegexURLPattern, RegexURLResolver
from django.contrib.staticfiles.finders import BaseFinder
from django.contrib.staticfiles.storage import StaticFilesStorage
from django.core.files.storage import Storage
from django.core.files.base import ContentFile


# class BempyCSSStorage(Storage):
#     def __init__(self, block):
#         self.block = block

#     def path(self, name):
#         return name

#     def open(self, name, mode='rb'):
#         return ContentFile('Content of the {0} block'.format(name),
#                            name)

# class BempyJSStorage(Storage):
#     def __init__(self, block):
#         self.block = block

#     def path(self, name):
#         return name

#     def open(self, name, mode='rb'):
#         return ContentFile('Content of the {0} block'.format(name),
#                            name)

def extract_views_from_urlpatterns(urlpatterns, base='', namespace=None):
    """
    Return a list of views from a list of urlpatterns.

    Each object in the returned list is a two-tuple: (view_func, regex)
    """
    # stolen from django-extensions's show_urls
    
    views = []
    for p in urlpatterns:
        if isinstance(p, RegexURLPattern):
            try:
                if not p.name:
                    name = p.name
                elif namespace:
                    name = '{0}:{1}'.format(namespace, p.name)
                else:
                    name = p.name
                views.append((p.callback, base + p.regex.pattern, name))
            except ViewDoesNotExist:
                continue
        elif isinstance(p, RegexURLResolver):
            try:
                patterns = p.url_patterns
            except ImportError:
                continue
            views.extend(extract_views_from_urlpatterns(patterns, base + p.regex.pattern, namespace=(namespace or p.namespace)))
        elif hasattr(p, '_get_callback'):
            try:
                views.append((p._get_callback(), base + p.regex.pattern, p.name))
            except ViewDoesNotExist:
                continue
        elif hasattr(p, 'url_patterns') or hasattr(p, '_get_url_patterns'):
            try:
                patterns = p.url_patterns
            except ImportError:
                continue
            views.extend(extract_views_from_urlpatterns(patterns, base + p.regex.pattern, namespace=namespace))
        else:
            raise TypeError("%s does not appear to be a urlpattern object" % p)
    return views


def get_css_for_pages(page):
    css = []

    for page in page:
        for block in page[0].uses_blocks:
            block_css = block()('get-css')
            for item in block_css:
                if item not in css:
                    css.append(item)

    return u'\n'.join(css)


def get_js_for_pages(page):
    js = []

    for page in page:
        for block in page[0].uses_blocks:
            block_js = block()('get-js')
            for item in block_js:
                if item not in js:
                    js.append(item)

    return u'\n'.join(js)


def ensure_dir(dirname):
    if not os.path.exists(dirname):
        os.makedirs(dirname)
        
    
class ViewFinder(BaseFinder):
    def find(self, path, all=False):
        matches = []
        print 'CALLING SEARCH', path, all
        return matches
        
    def list(self, ignore_patterns):
        print 'CALLING list with:', ignore_patterns
        from django.conf import settings
        urlconf = __import__(settings.ROOT_URLCONF, {}, {}, [''])

        views = extract_views_from_urlpatterns(urlconf.urlpatterns)
        views = [view for view in views
                 if getattr(view[0], 'block', None)]

        css = get_css_for_pages(views)
        ensure_dir(settings.BEMPY_STATIC_DIR)
        css_filename = os.path.join(settings.BEMPY_STATIC_DIR, 'bempy.css')
        with open(css_filename, 'w') as f:
            f.write(css.encode('utf-8'))
            
        js = get_js_for_pages(views)
        js_filename = os.path.join(settings.BEMPY_STATIC_DIR, 'bempy.js')
        with open(js_filename, 'w') as f:
            f.write(js.encode('utf-8'))
            
        storage = StaticFilesStorage(settings.BEMPY_STATIC_DIR)
        return [
            ('bempy.css', storage),
            ('bempy.js', storage),
#            ('bempy/bempy.css', storage.path('bempy.css')),
#                ('bempy/bempy.js', storage.path('bempy.js'))
        ]
