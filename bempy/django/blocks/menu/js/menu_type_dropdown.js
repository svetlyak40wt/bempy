$(document).ready(function() {
    $('html').click(function (ev) {

        if ($(ev.target).hasClass('menu-dropdown__button')) {
            ev.preventDefault();

            var list = $(ev.target).siblings('.menu-dropdown__list');
            if (list.is(':hidden')) {
                list.fadeIn();
            } else {
                list.fadeOut();
            }
        } else {
            $('.menu-dropdown__list').fadeOut();
        }
    });
});
