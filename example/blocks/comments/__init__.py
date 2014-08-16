from django.http import HttpResponseRedirect
from bempy import block, ImmediateResponse
from bempy import blocks as b



_comments = []

@block(method='GET')
def comments(request):
    form = b.form(fields=[b.text_field(name='comment_text')],
                  button=b.submit_button(),
                  action='.')
    return dict(comments=_comments,
                form=form)


@block(method='POST')
def comments(request):
    _comments.append(request.POST['comment_text'])
    raise ImmediateResponse(HttpResponseRedirect('.'))
