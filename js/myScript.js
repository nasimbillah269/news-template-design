$(document).ready(function () {
  var header = $(".sticky-header");

  var win = $(window);
  win.on("scroll", function () {
    var scroll = win.scrollTop();
    if (scroll < 150) {
      header.removeClass("stick");
    } else {
      header.addClass("stick");
    }
  });
});
