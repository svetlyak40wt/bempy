from bempy.blocks import block

@block()
def title(content, level=None):
    return dict(content=content, level=level or 1)
