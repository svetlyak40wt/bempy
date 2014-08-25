# coding: utf-8
from __future__ import absolute_import

from functools import wraps
import operator
from django.template.loader import render_to_string
from django.template import RequestContext
from importlib import import_module


USE_BLOCKS_FROM = [
]

registry = {}


def dict_to_key(d):
    return tuple(sorted(d.items()))


def get_block_name(func):
    return func.__name__.replace('_', '-')

    
def get_blockname_with_modifiers(func, **modifiers):
    """Возвращает имя функции + модификаторы.
    Строка формируется, как название функции и модификаторы,
    склееные через '_'.
    В названиях подчеркивания заменяются на дефисы."""

    block_name = get_block_name(func)
    
    modifiers = modifiers.items()
    modifiers.sort()
    def get_mod_line(mod, value):
        mod = mod.replace('_', '-')
        return u'{0}_{1}'.format(mod, value)
    result = [block_name] + [get_mod_line(*item)
                             for item in modifiers]
    return u'_'.join(result)


def get_template_name(func, **modifiers):
    return get_blockname_with_modifiers(func, **modifiers) + u'.html'


def get_block_css(func, **modifiers):
    """Возвращает css для блока с заданными модификаторами.
    """
    from importlib import import_module
    import os.path
    mo = import_module(func.__module__)
    dir_name = os.path.dirname(mo.__file__)
    main_css_filename = os.path.join(
        dir_name, 'css',
        get_block_name(func) + '.css')
    css_filename_with_modifiers = os.path.join(
        dir_name, 'css',
        get_blockname_with_modifiers(func, **modifiers) + '.css')

    result = u''
    print 'checking', main_css_filename
    if os.path.exists(main_css_filename):
        with open(main_css_filename) as f:
            result += f.read() + '\n'

    if css_filename_with_modifiers != main_css_filename:
        print 'checking', css_filename_with_modifiers
        if os.path.exists(css_filename_with_modifiers):
            with open(css_filename_with_modifiers) as f:
                result += f.read() + '\n'

    return result


def block(**modifiers):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            """Этот декоратор реализует отложенный вызов функции, которую он декорирует.
            По сути, он возвращает promice, который при вызове, уже зовет реальную функцию.
            """
            def ret(action, **additional_context):
                print action, 'block_' + func.__name__

                if action == 'render':
                    request = additional_context.pop('request')
                    context = func(*args, **(dict(kwargs,
                                                  **additional_context)))

                    def render(value):
                        if isinstance(value, (list, tuple)):
                            return map(render, value)
                        elif isinstance(value, dict):
                            return dict((key, render(val))
                                        for key, val
                                        in value.iteritems())

                        if 'render' in getattr(value, 'block_actions', []):
                            return value('render', request=request)
                        return value
                        
                    # now render all blocks in the context
                    context = dict((key, render(value))
                                   for key, value in context.iteritems())

                    return render_to_string(get_template_name(func, **modifiers),
                                            context,
                                            RequestContext(request))
                elif action == 'get-css':
                    from itertools import chain
                    def get_css(value):
                        if isinstance(value, (list, tuple)):
                            return chain(*map(get_css, value))
                        elif isinstance(value, dict):
                            return chain(*(get_css(val)
                                           for key, val
                                           in value.iteritems()))

                        if 'get-css' in getattr(value, 'block_actions', []):
                            return value('get-css')
                        return []

                    css = [get_block_css(func, **modifiers)]
                    for key, value in kwargs.iteritems():
                        for item in get_css(value):
                            if item is not None:
                                css.append(item)
                    return list(set(css))

            ret.block_actions = ['render', 'get-css']
            ret.__name__ = 'block_' + func.__name__
            return ret
        registry[(func.__name__, dict_to_key(modifiers))] = wrapper
        return wrapper
    return decorator


def context_block(name, **modifiers):
    """Basic block with no logic inside.
    It only passes given context to the renderer.
    """
    def _block(**content):
        return content
    _block.__name__ = name
    return block(**modifiers)(_block)


class Dispatcher(object):
    def __init__(self, name):
        self.name = name

    def __call__(self, **kwargs):
        possible_modifiers = [key[1] for key, value in registry.items()
                              if key[0] == self.name]
        possible_modifiers = reduce(operator.add, possible_modifiers, tuple())
        possible_modifiers = {item[0] for item in possible_modifiers}

        modifiers = {key: value
                     for key, value in kwargs.items()
                     if key in possible_modifiers}

        content = {key: value
                   for key, value in kwargs.items()
                   if key not in modifiers}

        block_constructor = registry[(self.name, dict_to_key(modifiers))]
        return block_constructor(**content)


class Loader(object):
    def __init__(self):
        for name in USE_BLOCKS_FROM:
            import_module(name)

    def __getattr__(self, name):
        return Dispatcher(name)

b = Loader()


class ImmediateResponse(Exception):
    def __init__(self, response):
        super(ImmediateResponse, self).__init__('Immediate reponse')
        self.response = response
