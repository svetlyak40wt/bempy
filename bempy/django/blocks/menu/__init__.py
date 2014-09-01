from bempy import context_blocks, block, b
from bempy.django import uses

@block(type='dropdown')
@uses('bempy.django.blocks.jquery')
def menu(*items, **kwargs):
    label = kwargs.get('label', 'A Label')
    opened = kwargs.get('opened', False)
    return dict(items=items,
                label=label,
                opened=opened)


context_blocks('menu',
               'menu_item',
               ('menu_item', {'selected': True}),
               locals())
