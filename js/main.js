$(window).load(function() {
  $('.flexslider').flexslider({
  	slideshow: false
  });

  $('.hamburger').on('click', function(){
  	$('.header-social-wrapper').toggleClass('mobile-shown');
  	$('.nav-header').toggleClass('mobile-shown');
  });
});