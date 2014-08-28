def uses(*modules):
    from django.conf import settings
    for module in modules:
        if module not in settings.INSTALLED_APPS:
            settings.INSTALLED_APPS += (module,)

    def wrapper(func):
        return func
    return wrapper

