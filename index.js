import './source/js/jquery';
import './source/js/navbar';
import './source/js/gamersScroll';
import './node_modules/owl.carousel/dist/owl.carousel.min.js';
import AOS from './node_modules/aos/dist/aos.js';


import './source/js/clients';
import './source/js/owl-carousel';


// AOS LIBRARY
  AOS.init();

// page loader
$('body').css('max-height','100vh');
$('body').css('overflow','hidden');
$(window).on('load', function() {
  setTimeout(function(){
    $('.page-spinner').fadeOut();
    $('.spinner').fadeOut();
    $('body').css('overflow','auto');
    $('body').css('max-height','unset');
  }, 1000);
 });
