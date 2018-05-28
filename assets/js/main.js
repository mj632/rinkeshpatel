$(document).ready(function () {
    //-----tooltip only for desktop devices
    $('#main-body').css('margin-top', $('#page-navbar')[0].clientHeight);
    var screenWidth = window.innerWidth;
    if (screenWidth > 991) {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
    }
    else if (screenWidth < 575.98) {
        $('#home.page-parts').removeClass('header-bg-image');
    }

    //-----------min-height of each section
    var windowHeight = $(window)[0].innerHeight - $('#page-navbar')[0].clientHeight;
    $('.page-parts').css("min-height", windowHeight);
    //===========Ends here=========//
    //----------- on click redirect to the section
    $('.nav-link').click(function () {
        var navIcon = $(this);
        var body = $('body')[0];
        var id = navIcon[0].hash;
        var scrollTopHeight = 0;
        var screenWidth = body.clientWidth;
        if (screenWidth < 575.98) {
            scrollTopHeight = $(id).offset().top - $('#page-navbar')[0].clientHeight;
            scrollTopHeight += $('#mainMenu')[0].clientHeight;
            $('html,body').animate({scrollTop: scrollTopHeight}, 'slow');
            $('#mainMenu').collapse('hide');
        }
        else {
            if(id != '#home') {
                $('.row.img-block-row').css('display', 'block');
                $('.home-img').addClass("hide-img");
                $(".home-img").addClass('hide-img');
                $('.page-parts.header-bg-image').removeClass("image-block");
                $('.page-parts.header-bg-image').addClass("small-icon");
                $('.page-parts.header-bg-image').css('animation-play-state','running');
                $('.page-parts.header-bg-image').addClass("fixed-top");
                scrollTopHeight = $(id).offset().top - $('#page-navbar')[0].clientHeight;
            }
            else {
                scrollTopHeight = 0;
                $('.row.img-block-row').css('display', 'flex');
                $('.page-parts.header-bg-image').removeClass("small-icon");
                $('.page-parts.header-bg-image').addClass("image-block");
                $('.home-img').removeClass("hide-img");
                $('.page-parts.header-bg-image').removeClass("fixed-top");
                scrollTopHeight = $(id).offset().top - $('#page-navbar')[0].clientHeight;
            }
            $('html,body').animate({scrollTop: scrollTopHeight}, 'slow');


        }
    });
    $('#nav-toggle-btn').blur(function(){
      $('#mainMenu').collapse('hide');
    });

//============Highchart starts from here===========//
var idList = ['Siemens-NX-container',
              'SolidWorks-container',
              'CREO-container',
              'CATIA-container',
              'DFM-container',
              'Arduino-container',
              '3DPrinting-container',
              'Photoshop-container',
              'Microsoft-Office-container'];
var nameList = ['Siemens NX',
                'SolidWorks',
                'CREO 2.0',
                'CATIA V5',
                'DFM&A, GD & T',
                'Arduino',
                '3D Printing',
                'Photoshop',
                'Microsoft Office'];
var skillScaleList = [80,72,65,60,70,40,80,70,60];

drawCharts(idList, nameList, skillScaleList);
//===============Highcharts for all the skills
});

