from bempy import block

@block()
def href(text, url):
    return dict(text=text, url=url)
