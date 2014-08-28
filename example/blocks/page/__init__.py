from bempy import block, b
from bempy.django import uses

@block(with_menu=True)
@uses('bempy.django.blocks.cssreset',
      'bempy.django.blocks.menu',
      'bempy.django.blocks.title',
      'bempy.django.blocks.login_menu')
def page(request, menu, **content):
    context = content.copy()

    context['title'] = b.title("Bempy's Blog")
    context['cssreset'] = b.cssreset()
    context['login'] = b.login_menu()
    context['menu'] = b.menu(items=[
        b.menu_item(label=label,
                    path=path,
                    selected=True)
        if (request.path == path)
        else b.menu_item(label=label,
                         path=path)
        for path, label in menu])

    return context
