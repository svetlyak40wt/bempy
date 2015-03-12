# coding: utf-8
from __future__ import absolute_import

from clint.textui import colored
from functools import wraps
from itertools import chain
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
    print 'checking', main_css_filename,
    if os.path.exists(main_css_filename):
        print colored.green('found')
        with open(main_css_filename) as f:
            result += f.read() + '\n'
    else:
        print colored.red('missing')

    if css_filename_with_modifiers != main_css_filename:
        print 'checking', css_filename_with_modifiers,
        if os.path.exists(css_filename_with_modifiers):
            print colored.green('found')
            with open(css_filename_with_modifiers) as f:
                result += f.read() + '\n'
        else:
            print colored.red('missing')

    return result


def get_block_js(func, **modifiers):
    """Возвращает js для блока с заданными модификаторами.
    """
    from importlib import import_module
    import os.path
    mo = import_module(func.__module__)
    dir_name = os.path.dirname(mo.__file__)
    main_js_filename = os.path.join(
        dir_name, 'js',
        get_block_name(func) + '.js')
    js_filename_with_modifiers = os.path.join(
        dir_name, 'js',
        get_blockname_with_modifiers(func, **modifiers) + '.js')

    result = u''
    print 'checking', main_js_filename,
    if os.path.exists(main_js_filename):
        print colored.green('found')
        with open(main_js_filename) as f:
            result += f.read().decode('utf-8') + u'\n'
    else:
        print colored.red('missing')

    if js_filename_with_modifiers != main_js_filename:
        print 'checking', js_filename_with_modifiers,
        if os.path.exists(js_filename_with_modifiers):
            print colored.green('found')
            with open(js_filename_with_modifiers) as f:
                result += f.read().decode('utf-8') + u'\n'
        else:
            print colored.red('missing')

    return result


def block():
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            """Этот декоратор реализует отложенный вызов функции, которую он декорирует.
            По сути, он возвращает promise, который при вызове, уже зовет реальную функцию.
            """
            # если render ни разу не вызывался, то returned_context будет пустой
            # get-css использует returned_context для извлечения информации о блоках
            # которые страница использует внутри, а не получает на входе

            # TODO: remove link between this
            # dependecies should be given explicitly
            returned_context = {}

            def ret(action, **additional_context):
                print colored.blue(action), 'block_' + func.__name__

                if action == 'render':
                    request = additional_context.pop('request')
                    returned_context.update(func(*args,
                                                 **(dict(kwargs,
                                                         **additional_context))))

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
                    rendered_context = dict((key, render(value))
                                            for key, value in returned_context.iteritems())

                    return render_to_string(get_template_name(func),
                                            rendered_context,
                                            RequestContext(request))
                elif action == 'get-css':
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

                    css = [get_block_css(func)]

                    for value in getattr(func, 'uses_blocks', []):
                        try:
                            for item in get_css(value()):
                                if item is not None:
                                    css.append(item)
                        except TypeError:
                            import pdb; pdb.set_trace()
                            raise
                    return list(set(css))

                elif action == 'get-js':
                    def get_js(value):
                        if isinstance(value, (list, tuple)):
                            return chain(*map(get_js, value))
                        elif isinstance(value, dict):
                            return chain(*(get_js(val)
                                           for key, val
                                           in value.iteritems()))

                        if 'get-js' in getattr(value, 'block_actions', []):
                            return value('get-js')
                        return []

                    js = [get_block_js(func)]

                    for key, value in chain(kwargs.iteritems(),
                                            returned_context.iteritems()):
                        for item in get_js(value):
                            if item is not None:
                                js.append(item)
                    return list(set(js))


            ret.block_actions = ['render', 'get-css', 'get-js']
            ret.__name__ = 'block_' + func.__name__
            return ret
        registry[func.__name__] = wrapper
        return wrapper
    return decorator


def context_blocks(*args):
    """Basic block with no logic inside.
    It only passes given context to the renderer.
    """
    names, env = args[:-1], args[-1:][0]

    for name in names:
        def _block(*args, **content):
            return dict(content, args=args)
        _block.__name__ = name
        _block.__module__ = env['__name__']
        env[name] = block()(_block)


class Dispatcher(object):
    def __init__(self, name):
        self.name = name

    def __call__(self, *args, **content):
        block_constructor = registry[self.name]
        return block_constructor(*args, **content)


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
