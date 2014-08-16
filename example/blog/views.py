from bempy.django.views import returns_blocks
from bempy import b


@returns_blocks
def index(request):
    return b.page(main_content=b.test_block(),
                  menu=b.menu(items=[b.menu_item(label='One'),
                                     b.menu_item(label='two', selected=True)]),
                  comments=b.comments(request=request, method=request.method),
                  with_menu=True)
