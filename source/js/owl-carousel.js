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

// clients names
$(document).ready(function(){
  $('.clients-names__owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    center: true,
    URLhashListener: true,
    startPosition: 'URLHash'
  });

  var owl = $('.clients-names__owl-carousel');
  owl.owlCarousel();
  // Go to the next item
  $('.customNamesNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
  });
});


// products type
$(document).ready(function(){
  $('.products-type__owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    center: true,
    URLhashListener: true,
    startPosition: 'URLHash'
  });

  var owl = $('.products-type__owl-carousel');
  owl.owlCarousel();
});

// products categories
$(document).ready(function(){
  $('.products-categories__owl-carousel').owlCarousel({
    items: 5,
    loop: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    center: true,
    URLhashListener: true,
    startPosition: 'URLHash'
  });

  var owl = $('.products-categories__owl-carousel');
  owl.owlCarousel();
});


$('.products-sub-categories__owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
  responsive: {
    0:{
      items: 1,
    },
    560: {
      items: 2,
    },
    1010: {
      items: 3,
    },
    1200:{
      items: 4,
    }
  }
})
