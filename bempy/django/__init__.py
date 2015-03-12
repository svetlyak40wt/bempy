import os.path
from django.template.loader import BaseLoader
from django.template.base import TemplateDoesNotExist
from django.conf import settings
from bempy.blocks import registry
from importlib import import_module


class TemplateLoader(BaseLoader):
    is_usable = True

    def get_template_sources(self, template_name, template_dirs=None):
        """
        Returns the absolute paths to "template_name", when appended to each
        directory in "template_dirs". Any paths that don't lie inside one of the
        template dirs are excluded from the result set, for security reasons.
        """
        block_name = template_name.split('.', 1)[0].replace('-', '_')
        block = registry[block_name]
        module_name = block.__module__
        module = import_module(module_name)
        module_filename = module.__file__
        dirname = os.path.dirname(module_filename)
        template_dirs = [os.path.join(dirname, 'templates', template_name)]

        return template_dirs

    def load_template_source(self, template_name, template_dirs=None):
        for filepath in self.get_template_sources(template_name, template_dirs):
            try:
                with open(filepath, 'rb') as fp:
                    return (fp.read().decode(settings.FILE_CHARSET), filepath)
            except IOError:
                pass
        raise TemplateDoesNotExist(template_name)
        

def uses(*blocks):
    # from django.conf import settings
    # for module in modules:
    #     if module not in settings.INSTALLED_APPS:
    #         settings.INSTALLED_APPS += (module,)

    def wrapper(func):
        func.uses_blocks = blocks
        return func
    return wrapper

