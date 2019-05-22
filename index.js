
$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 20) { // check if user scrolled more than 20 from top of the browser window
            $('.navbar').removeClass('navbar-light');
            $('.navbar').addClass('bg-dark navbar-dark');
        } else {
            $('.navbar').removeClass('bg-dark navbar-dark');
            $('.navbar').addClass('navbar-light');
        }
    });
});


$('.carousel').carousel({
    interval: 10000
  })

  var scroll = new SmoothScroll('a[href*="#"]');