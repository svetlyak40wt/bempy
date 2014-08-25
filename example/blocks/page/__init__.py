from bempy import block, b


@block(with_menu=True)
def page(request, menu, **content):
    context = content.copy()

    context['menu'] = b.menu(items=[
        b.menu_item(label=label,
                    path=path,
                    selected=True)
        if (request.path == path)
        else b.menu_item(label=label,
                         path=path)
        for path, label in menu])

    return context
