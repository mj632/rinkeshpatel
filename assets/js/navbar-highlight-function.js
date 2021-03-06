$(document).ready(function () {
    // $sections incleudes all of the container divs that relate to menu items.
    // The user scrolls  this is when the window gets reloaded
    var $sections = $('.page-parts');
    var navBarMargin = 1;
    var navBarHeight = $('#page-navbar')[0].clientHeight + navBarMargin;
    var currentScroll = $(this).scrollTop();
    if (currentScroll == 0) {
        $('#page-navbar').css('opacity', 1);
    }
    else {
        $('#page-navbar').css('opacity', 0.9);
    }

    $(window).scroll(function () {

        // currentScroll is the number of pixels the window has been scrolled
        var currentScroll = $(this).scrollTop();
        if (currentScroll == 0) {
            $('#page-navbar').css('opacity', 1);
        }
        else {
            $('#page-navbar').css('opacity', 0.9);
        }
        // $currentSection is somewhere to place the section we must be looking at
        var $currentSection = $(this);

        // We check the position of each of the divs compared to the windows scroll positon
        $sections.each(function () {
            // divPosition is the position down the page in px of the current section we are testing
            var divPosition = $(this).offset().top - navBarHeight;

            // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
            // the -1 is so that it includes the div 1px before the div leave the top of the window.
            if (divPosition - 1 < currentScroll) {
                // We have either read the section or are currently reading the section so we'll call it our current section
                $currentSection = $(this);
                // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
            }

            // This is the bit of code that uses the currentSection as its source of ID
        })
        var id = $currentSection[0].id;
        $('a.nav-link').removeClass('active');
        $("[href=\"#" + id + "\"]").addClass('active');
    });
//============on scroll when at home from here===========//
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    // console.log(st);
       // downscroll code
   } else {
    // console.log(st);
      // upscroll code
   }
   lastScrollTop = st;
});

//============on scroll when at home ends here===========//

});
