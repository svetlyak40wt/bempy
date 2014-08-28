from bempy import context_blocks

context_blocks(['menu',
                'menu_item',
                ('menu_item', {'selected': True})],
               locals())
