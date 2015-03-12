from django.http import HttpResponseRedirect
from bempy import block, ImmediateResponse
from bempy import b


_comments = []

@block()
def comments(request):
    if request.method == 'POST':
        _comments.append(request.POST['comment_text'])
        raise ImmediateResponse(HttpResponseRedirect('.'))
    else:
        form = b.form(fields=[b.text_field(name='comment_text')],
                      button=b.submit_button(),
                      action='.')
        return dict(comments=_comments,
                    form=form)
