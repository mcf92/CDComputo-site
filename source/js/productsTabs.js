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

  // CATEGORIES SCROLL

  // duration of scroll animation
  var scrollDuration = 1000;
  // paddles
  var rightPaddle = document.getElementsByClassName('products-categories__scroll-right');

  // get items dimensions
  var itemsLength = $('.products-categories__item').length;
  var itemSize = $('.products-categories__item').outerWidth(true);

  // get wrapper width
  var getMenuWrapperSize = function() {
  	return $('.products-categories__container').outerWidth();
  }
  var menuWrapperSize = getMenuWrapperSize();
  // the wrapper is responsive
  $(window).on('resize', function() {
  	menuWrapperSize = getMenuWrapperSize();
  });

  // get total width of all menu items
  var getMenuSize = function() {
  	return itemsLength * itemSize;
  };

  var menuSize = getMenuSize();

  // get how much of menu is invisible
  var menuInvisibleSize = menuSize - menuWrapperSize;

  // get how much of menu is invisible
  $('.products-categories').on('scroll', function() {
    console.log('scroll', menuSize, menuWrapperSize);
  	menuInvisibleSize = menuSize - menuWrapperSize;
  });
  // scroll to left
  $('.products-categories__scroll-right').on('click', function() {
    console.log('entro', menuInvisibleSize);
  	$('.products-categories').animate( { scrollLeft: menuInvisibleSize}, 5000);
  });

  // scroll to right
  $('.products-categories__scroll-left').on('click', function() {
  	$('.products-categories').animate( { scrollLeft: '0' }, scrollDuration);
  });
});
