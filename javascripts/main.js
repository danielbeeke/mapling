$.fn.behaviours = {};

require(["jquery", "view.toggle"], function($) {
    $(function() {

      $.each($.fn.behaviours, function() {
        this.attach();
      });

    });
});
