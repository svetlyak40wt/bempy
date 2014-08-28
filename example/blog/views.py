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
        ('Just a text', 'Click me'),
        ('Another text', 'Blick me')),
        
                  request=request,
                  menu=create_menu(request),
                  with_menu=True)


    # return b.page(content=b.vbox(
    #     content=[b.dropdown(label=b.text('Click me'),
    #                         items=[b.text('First'),
    #                                b.text('Second'),
    #                                b.text('Third')])]),
    #               request=request,
    #               menu=create_menu(request),
    #               with_menu=True)


    
@returns_blocks
def about(request):
    return b.page(content=b.text(
        paragraphs=['This is a page about this blog.',
                    'It could contain multiple paragraph of text']),
                  request=request,
                  menu=create_menu(request),
                  with_menu=True)
