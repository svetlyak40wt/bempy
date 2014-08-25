from bempy import block


@block(add_new_post=True)
def button(user):
    is_superuser = user.is_superuser
    is_superuser = True

    if is_superuser:
        return dict(visible=True,
                    label='Add new post')
