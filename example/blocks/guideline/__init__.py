from bempy import block
from bempy.django import uses
from bempy.blocks import b


@block()
def guideline(*sections):
    return dict(sections=[
        dict(title=title,
             content=content)
        for title, content in sections])
