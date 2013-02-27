(function ($) {

  $.fn.behaviours.viewToggle = {
    attach: function (settings) {

    $.fn.behaviours.viewToggle.init = function (triggers) {
        $(triggers).click(function (e) {
            e.preventDefault();
            $.fn.behaviours.viewToggle.toggleClasses(this);
            $.fn.behaviours.viewToggle.toggleActiveClasses(triggers);
        });
        return triggers;
    };

    $.fn.behaviours.viewToggle.toggleClasses = function (el) {
        var body = $('body');
        var dir = $(el).attr('href');
        if (dir === '#left') {
            body.toggleClass('show-left').removeClass('show-right');
        }
        if (dir === '#right') {
            body.toggleClass('show-right').removeClass('show-left');
        }
        return body.attr('class');
    };

    $.fn.behaviours.viewToggle.toggleActiveClasses = function (triggers) {
        var left = $(triggers).filter('[href="#left"]');
        var right = $(triggers).filter('[href="#right"]');
        var body = $('body');
        if (body.hasClass('show-left')) {
            left.addClass('active');
        } else {
            left.removeClass('active');
        }
        if (body.hasClass('show-right')) {
            right.addClass('active');
        } else {
            right.removeClass('active');
        }
    };

    $.fn.behaviours.viewToggle.init($('.toggle'));

    }
  };

})(jQuery);