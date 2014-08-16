from bempy import context_block, block

form = context_block('form')
text_field = context_block('text_field')
text_field = context_block('text_field')


@block()
def submit_button(**content):
    return content
