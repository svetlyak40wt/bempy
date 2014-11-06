from bempy import block

@block()
def button(text=None, id=None, value=None, tabindex=None, url=None, size='l'):
    return dict(text=text,
                id=id,
                value=value,
                tabindex=tabindex,
                url=url,
                size=size)
