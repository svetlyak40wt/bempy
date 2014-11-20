from bempy import block, b
from bempy.django import uses

@block(with_menu=True)
@uses('bempy.django.blocks.cssreset',
#      'bempy.django.blocks.menu',
      'bempy.django.blocks.title')
def page(request, menu, **content):
    context = content.copy()

    context['title'] = b.title("Bempy's Blog")
    context['cssreset'] = b.cssreset()

    if request.user.is_authenticated() or True:
        pass
        # context['login'] = b.menu(
        #     b.href('Preferences', '/settings/'),
        #     b.href('Logout', '/logout/'),
        #     label=request.user.username or 'svetlyak40wt',
        #     type='dropdown')
    else:
        context['login'] = b.href('Login', '/login/')

    # context['menu'] = b.menu(items=[
    #     b.menu_item(label=label,
    #                 path=path,
    #                 selected=True)
    #     if (request.path == path)
    #     else b.menu_item(label=label,
    #                      path=path)
    #     for path, label in menu])

    return context
