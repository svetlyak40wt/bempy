from bempy import block
from bempy.django import uses
from bempy.blocks import b


@block()
def guideline(*sections):
    def process_content_item(content):
        # content can be either a single item or tuple of
        # two items where first one is description of the
        # example and second one is a block
        if isinstance(content, tuple):
            return content
        else:
            return None, content

    def process_content(content):
        if not isinstance(content, tuple):
            content = (content,)
        return map(process_content_item, content)

    def process_section(section):
        title = section[0]
        content = section[1:]
        return dict(title=title,
                    content=process_content(content))

    return dict(sections=map(process_section, sections))
