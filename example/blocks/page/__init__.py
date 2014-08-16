from bempy import block


@block()
def page(**content):
    return content


@block(with_menu=True)
def page(**content):
    return content

    
@block()
def test_block(**content):
    return content


@block()
def menu(**content):
    return content


@block()
def menu_item(**content):
    return content


@block(selected=True)
def menu_item(**content):
    return content
