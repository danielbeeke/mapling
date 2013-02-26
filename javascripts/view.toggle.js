(function ($) {

  $.fn.behaviours.viewToggle = {
    attach: function (context, settings) {

    $.fn.behaviours.viewToggle.init = function (triggers) {
        $(triggers).click(function (e) {
            e.preventDefault();
            $.fn.behaviours.viewToggle.toggleClasses(this);
            $.fn.behaviours.viewToggle.toggleText(triggers);
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

    $.fn.behaviours.viewToggle.toggleText = function (triggers) {
        var left = $(triggers).filter('[href="#left"]');
        var right = $(triggers).filter('[href="#right"]');
        var body = $('body');
        if (body.hasClass('show-left')) {
            left.text('hide left');
        } else {
            left.text('show left');
        }
        if (body.hasClass('show-right')) {
            right.text('hide right');
        } else {
            right.text('show right');
        }
    };

    $.fn.behaviours.viewToggle.init($('.toggle'));

    }
  };

})(jQuery);