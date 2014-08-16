from bempy import block


@block()
def form(**content):
    return content


@block()
def text_field(**content):
    return content


@block()
def submit_button(**content):
    return content
