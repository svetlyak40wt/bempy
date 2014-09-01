import copy

from bempy.django.views import returns_blocks
from bempy import b


def create_menu(request):
    menu = [('/', 'Blog'),
            ('/guide/', 'Style guide'),
            ('/about/', 'About')]
    if request.user.is_superuser:
        menu.append(('/add-post/', 'Write post'))
    return menu


@returns_blocks
def index(request):
    return b.page(content=b.posts(),
                  request=request,
                  menu=create_menu(request),
                  with_menu=True)


@returns_blocks
def guide(request):
    return b.page(content=b.guideline(
        ('Just a text', b.text('This is a text with few paragraphs. One of them is famous lorem.',
                               """Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec aliquet nunc. Phasellus congue ultrices augue, a blandit eros pulvinar non. Nulla tellus nibh, imperdiet eget malesuada ut, fermentum id dui. Maecenas elementum tortor ut diam aliquam rhoncus. Cras et tristique tortor. Sed et diam neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque auctor ullamcorper condimentum. Nam tempus maximus ipsum, id condimentum ex lobortis vitae. Mauris mattis ligula lectus, ut congue enim convallis ac. Mauris suscipit urna vel urna iaculis, nec dapibus ipsum dictum.""",
                               """Nullam convallis iaculis dui in faucibus. In mi lacus, sollicitudin eu consectetur ut, rutrum at risus. Donec ornare dui suscipit sem consequat, eu lobortis urna fringilla. Nullam sit amet lorem non metus dapibus porttitor ac a tortor. Nulla facilisi. Nulla hendrerit est vehicula, vulputate nibh sed, auctor massa. Sed eu fringilla ante, ut ullamcorper leo. Praesent enim lacus, eleifend cursus imperdiet ut, euismod non quam. Morbi rutrum justo nec mauris elementum feugiat quis lacinia dui. Donec dignissim dui eu justo lacinia, commodo elementum urna luctus. Nam non tincidunt nisl, vitae vehicula odio. Fusce lobortis turpis non facilisis luctus. Pellentesque nec posuere sem. Phasellus eu ex sit amet orci pharetra vestibulum.""")),
        ('First level title', b.title('First Level Title')),
        ('Second level title', b.title('Second Level Title', level=2)),
        ('Third level title', b.title('Third Level Title', level=3)),
        ('Fourth level title', b.title('Fourth Level Title', level=4)),
        ('Drop down menu',
            ('This is collapsed dropdown menu:',
             b.menu('First item',
                    'Second item',
                    'Third item',
                    type='dropdown',
                    label='Click me NOW')),
            ('With links in list items:',
             b.menu(b.href('First item', '/first/'),
                    b.href('Second item', '/second/'),
                    b.href('Third item', '/third/'),
                    type='dropdown',
                    label='Click me NOW')),
            ('And here is opened dropdown menu:',
             b.menu('First item',
                    'Second item',
                    'Third item',
                    type='dropdown',
                    label='Click me NOW',
                    opened=True)),

     )),
        
                  request=request,
                  menu=create_menu(request),
                  with_menu=True)


@returns_blocks
def about(request):
    return b.page(content=b.text('This is a page about this blog.',
                                 'It could contain multiple paragraph of text'),
                  request=request,
                  menu=create_menu(request),
                  with_menu=True)
