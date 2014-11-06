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
    data = dict(post)
    data['title'] = b.title(post['title'], level=3)
    return data


@block(latest=True)
def post():
    return _posts[-1]


@block()
def posts(title='Recent posts'):
    return dict(title=b.title(title, level=2),
                posts=[
                    b.post(post=post)
                    for post in reversed(_posts)])



# from bempy import block, b
# from .models import Post

# def post2context(post):
#     return dict(
#         title=b.title(post.title, level=3),
#         content=b.text(post.text),
#         slug=post.slug)

# @block()
# def post(slug=None, post=None):
#     if slug:
#         post = Post.objects.get(slug=slug)
#     return post2context(post)

# @block(latest=True)
# def post():
#     latest = Post.objects.all()[0]
#     return post2context(latest)

# @block()
# def posts(title='Recent posts', limit=10):
#     _posts = Post.objects.all()[:limit]
#     return dict(
#         title=b.title(title, level=2),
#         posts=[b.post(post=post)
#                for post in _posts])
    
