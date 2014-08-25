from bempy import block, b

_posts = [{'id': 1,
           'title': 'First post in this example blog',
           'content': 'Lorem ipsus is boring'},
          {'id': 2,
           'title': 'The latest post',
           'content': 'Urgent news, Bempy is out!'}]

#_posts = []

@block()
def post(post):
    return post


@block(latest=True)
def post():
    return _posts[-1]


@block()
def posts(title='Recent posts'):
    return dict(title=title,
                posts=[
                    b.post(post=post)
                    for post in reversed(_posts)])
