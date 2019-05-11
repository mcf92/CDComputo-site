if(window.location.pathname === '/gamers.html') {
  function ScrollHandler(pageId) {
    var page = $('#' + pageId);
    var pageStart = page.offset().top - 50;
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
    {brand: 'sony', title: 'Lorem ipsum sit ame.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {brand: 'nintendo', title: 'Lorem ipsum sit ame.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {brand: 'playStation', title: 'Lorem ipsum sit ame.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  ];

  items.map((item) => (
    new ScrollHandler('gamers__carousel-' + item.brand)
  ))
}
