$(window).load(function() {
  $('.flexslider').flexslider({
  	slideshow: false
  });

  //toggle class on mobile hamburger click
  $('.hamburger').on('click', function(){
  	$('.header-social-wrapper').toggleClass('mobile-shown');
  	$('.nav-header').toggleClass('mobile-shown');
  });
});