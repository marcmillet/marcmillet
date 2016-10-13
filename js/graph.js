$(function () {
    // Create the chart
    $('.graph1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Special abilities',
            style: {
              font: '30px PT Sans Narrow, sans-serif'
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total percent of knowledge'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Programes',
            colorByPoint: true,
            data: [{
                name: 'SolidWorks',
                y: 85,
            }, {
                name: 'Ansys',
                y: 60,
            }, {
                name: 'Matlab',
                y: 60,
            }, {
                name: 'Windows',
                y: 90,
            }, {
                name: 'Python',
                y: 75,
            }, {
                name: 'HTML5',
                y: 65,
            }, {
                name: 'JavaScript',
                y: 60,
            }, {
                name: 'CSS3',
                y: 60,
            }]
        }],
    });
  });
