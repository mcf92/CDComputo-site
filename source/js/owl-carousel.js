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
  // Go to the next item
  $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.customPreviousBtn').click(function() {
      owl.trigger('prev.owl.carousel');
  });
});
