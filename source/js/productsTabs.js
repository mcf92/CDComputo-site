import AOS from './../../node_modules/aos/dist/aos.js';

// AOS LIBRARY
  AOS.init();

  $(window).on('load', function() {
    AOS.refresh();
  })

$(document).ready(function() {
  $('.tab-1').addClass('current');
  $('ul.tabs li').click(function() {
  	var tab_id = $(this).attr('data-tab');
  	$('ul.tabs li').removeClass('current');
  	$('.tabs-content').removeClass('current');

  	$(this).addClass('current');
  	$("."+ tab_id).addClass('current');
    $("." + tab_id + " .products__banner-img").addClass('animated fadeInUp');
    $("." + tab_id + " .products__banner-titles").addClass('animated fadeInUp');
    setTimeout(function() {
      console.log('setTimeout');
      AOS.refresh();
    }, 10);
  });
});
