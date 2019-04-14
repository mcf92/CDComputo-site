$(document).ready(function(){
  $('.clients__owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    center: true,
    URLhashListener: true,
    startPosition: 'URLHash'
  });

  var owl = $('.clients__owl-carousel');
  owl.owlCarousel();
});
