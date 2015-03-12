from bempy import context_blocks, block, b
from bempy.django import uses
from bempy.django.blocks import jquery

@block()
@uses(jquery)
def dropdown_menu(*items, **kwargs):
    label = kwargs.get('label', 'A Label')
    opened = kwargs.get('opened', False)
    return dict(items=items,
                label=label,
                opened=opened)


context_blocks('menu',
               'menu_item',
               'selected_menu_item',
               locals())
