import './source/js/jquery';
import './source/js/subscription';
import './node_modules/owl.carousel/dist/owl.carousel.min.js';
import AOS from './node_modules/aos/dist/aos.js';
import './source/js/navbar';
import './source/js/gamersScroll';



import './source/js/clients';
import './source/js/owl-carousel';


// AOS LIBRARY
  AOS.init();

// page loader
$('body').css('max-height','100vh');
$('body').css('overflow','hidden');
$('.contact-us__map').css('display', 'none');
$(window).on('load', function() {
  AOS.refresh();
  setTimeout(function(){
    $('.page-spinner').fadeOut();
    $('.spinner').fadeOut();
    $('body').css('overflow','auto');
    $('body').css('max-height','unset');
  }, 1000);

  // contact us map
  $('.map--pointer').on('click', () => {
    $('.contact-us__map').removeClass('animated fadeOutDown');
    $('.contact-us__map').addClass('animated fadeInUp');
    setTimeout(() => {
      $('.contact-us__map').css('display', 'initial');
    }, 100);
  });
  $('.contact-us--close i').on('click', () => {
    $('.contact-us__map').removeClass('animated fadeInUp');
    $('.contact-us__map').addClass('animated fadeOutDown');
    setTimeout(() => {
      $('.contact-us__map').css('display', 'none');
    }, 500);
  });
 });
