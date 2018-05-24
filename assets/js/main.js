// $(window)[0].location.href = $(window)[0].location.origin + '/index.html';

$(document).ready(function () {
    // $sections incleudes all of the container divs that relate to menu items.
    var $sections = $('.page-parts');
    var navBarMargin = 0;
    var navBarHeight = $('#page-navbar')[0].clientHeight + navBarMargin;

    $('#main-body').css('margin-top', $('#page-navbar')[0].clientHeight);
    var screenWidth = window.innerWidth;
    if (screenWidth > 991) {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
    }

    // The user scrolls  this is when the window gets reloaded
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

    //-----------min-height of each section
    var windowHeight = $(window)[0].innerHeight - $('#page-navbar')[0].clientHeight;
    $('.page-parts').css("min-height", windowHeight);

    //----------- on click redirect to the section
    $('.nav-link').click(function () {
        goTo($(this));
    });

    $('.nav-link').click(function () {
        goTo($(this));
    });

    $('#nav-toggle-btn').blur(function(){
        goTo($(this));
    });
    


    var goTo = function (window) {
        var id = window[0].hash;
        var scrollTopHeight = $(id).offset().top - $('#page-navbar')[0].clientHeight;
        var screenWidth = window.innerWidth;
        if (screenWidth < 575.98) {
            scrollTopHeight += $('#mainMenu')[0].clientHeight;
            $('html,body').animate({scrollTop: scrollTopHeight}, 'slow');
            $('#mainMenu').collapse('hide');
        }
        else {
            $('html,body').animate({scrollTop: scrollTopHeight}, 'slow');
        }

    };

    //============Highchart starts from here===========//

    function renderIcons() {

        // Move icon
        if (!this.series[0].icon) {
            this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
                .attr({
                    'stroke': '#303030',
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-width': 2,
                    'zIndex': 10
                });
        }
        this.series[0].icon.translate(
            this.chartWidth / 2 - 10,
            this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
                (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
        );
    }

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

//===============Highcharts for all the skills
for(var i = 0; i < idList.length; i++) {
    Highcharts.chart(idList[i], {
      chart: {
          type: 'solidgauge',
          height: '110%',
          events: {
              render: renderIcons
          }
      },

      credits: {
          enabled: false
      },

      title: {
          text: nameList[i],
          style: {
               fontSize: '1em',
               fontWeight: 'bold'
          },
          align: 'center',
          verticalAlign: 'bottom'

      },

      tooltip: {
          borderWidth: 0,
          backgroundColor: 'none',
          shadow: false,
          style: {
              fontSize: '1em'
          },
          pointFormat: '{series.name}<br><span class = "d-none" style="font-size:1em; color: {point.color}; font-weight: bold">{point.y}%</span>',
          positioner: function (labelWidth) {
              return {
                  x: (this.chart.chartWidth - labelWidth) / 2,
                  y: (this.chart.plotHeight / 2) + 15
              };
          }
      },

      pane: {
          startAngle: 0,
          endAngle: 360,
          background: [{ // Track for Move
              outerRadius: '112%',
              innerRadius: '88%',
              backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                  .setOpacity(0.3)
                  .get(),
              borderWidth: 0
          }]
      },

      yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: []
      },

      plotOptions: {
          solidgauge: {
              dataLabels: {
                  enabled: false
              },
              linecap: 'round',
              stickyTracking: false,
              rounded: true
          }
      },

      series: [{
          name: ' ',
          data: [{
              color: Highcharts.getOptions().colors[0],
              radius: '112%',
              innerRadius: '88%',
              y: skillScaleList[i]
          }]
      }]
    });
  }
});

