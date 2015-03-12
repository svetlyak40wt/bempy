from bempy import block, b
from bempy.django import uses
from bempy.django.blocks import cssreset, menu, title, href, menu_item, selected_menu_item
from islets import y_header_with_search, y_header


@block()
@uses(cssreset, menu, title, href, y_header_with_search, y_header)
def page_with_menu(request, menu_items, **content):
    context = content.copy()

    context['header'] = y_header_with_search('Bempy')
    context['title'] = title("Bempy's Blog")
    context['cssreset'] = cssreset()

    if request.user.is_authenticated() or True:
        pass
        # context['login'] = b.menu(
        #     b.href('Preferences', '/settings/'),
        #     b.href('Logout', '/logout/'),
        #     label=request.user.username or 'svetlyak40wt',
        #     type='dropdown')
    else:
        context['login'] = href('Login', '/login/')

    context['menu'] = menu(items=[
        selected_menu_item(label=label,
                           path=path)
        if (request.path == path)
        else menu_item(label=label,
                       path=path)
        for path, label in menu_items])

    return context
