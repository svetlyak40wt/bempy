from bempy import block
from bempy.django import uses
from bempy.blocks import b


@block()
@uses('bempy.django.blocks.title')
def guideline(*sections):
    return dict(sections=[
        dict(title=b.title(title),
             content=content)
        for title, content in sections])
