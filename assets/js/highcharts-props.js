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

var drawCharts = function(idList, nameList, skillScaleList){

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

};
