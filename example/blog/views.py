from bempy.django.views import returns_blocks
from bempy import b


MENU_STRUCTURE = [('/', 'Blog'),
                  ('/guide/', 'Style guide'),
                  ('/about/', 'About')]


@returns_blocks
def index(request):
    content = [b.button(add_new_post=True,
                        user=request.user),
               b.posts()]
    return b.page(content=b.hbox(content=content),
                  request=request,
                  menu=MENU_STRUCTURE,
                  with_menu=True)


@returns_blocks
def guide(request):
    return b.page(content=b.text(
        paragraphs=['This is a page with example of some blocks']),
                  request=request,
                  menu=MENU_STRUCTURE,
                  with_menu=True)


@returns_blocks
def about(request):
    return b.page(content=b.text(
        paragraphs=['This is a page about this blog.',
                    'It could contain multiple paragraph of text']),
                  request=request,
                  menu=MENU_STRUCTURE,
                  with_menu=True)
