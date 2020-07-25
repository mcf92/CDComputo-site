if(window.location.pathname === '/gamers.html') {
  function ScrollHandler(pageId) {
    var page = $('#' + pageId);
    var pageStart = page.offset().top - 90;
    var pageJump = false;

    function scrollToPage() {
      pageJump = true;
        $('html, body').animate({
        scrollTop: pageStart
      }, {
        duration: 1000,
        complete: function() {
          pageJump = false;
        }
      });
    }
    window.addEventListener('wheel', function(event) {
     var viewStart = $(window).scrollTop();
     if (!pageJump) {
        var pageHeight = page.height();
        var pageStopPortion = pageHeight / 2;
        var viewHeight = $(window).height();

        var viewEnd = viewStart + viewHeight;
        var pageStartPart = viewEnd - pageStart;
        var pageEndPart = (pageStart + pageHeight) - viewStart;

        var canJumpDown = pageStartPart >= 0;
        var stopJumpDown = pageStartPart > pageStopPortion;

        var canJumpUp = pageEndPart >= 0;
        var stopJumpUp = pageEndPart > pageStopPortion;

        var scrollingForward = event.deltaY > 0;
        if (  ( scrollingForward && canJumpDown && !stopJumpDown)
           || (!scrollingForward && canJumpUp   && !stopJumpUp)) {
          event.preventDefault();
          scrollToPage();
        }
     } else {
       event.preventDefault();
     }
    });
  }
  var items = [
    {brand: 'logitech', title: 'science Wins', description: 'Compañía suiza centrada en la innovación y la calidad, Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas.'},
    {brand: 'trust', title: 'la marca n.º 1 en relación calidad/precio.', description: 'Trust es la marca n.º 1 en relación calidad/precio en el sector de accesorios digitales. Tenemos una gama enormemente amplia y en ella encontrará todo lo que pueda imaginar para su tablet, equipo de sobremesa o portátil, sistema de videojuegos, smartphone, televisor.'},
    {brand: 'amd', title: 'La Computación de Alto Rendimiento está Transformando Nuestras Vidas.', description: 'AMD desarrolla productos de procesamiento y visualización de alto rendimiento para hacer frente a algunos de los desafíos más difíciles e interesantes del mundo.'},
  ];

  items.map((item) => (
    new ScrollHandler('gamers__carousel-' + item.brand)
  ))
}
