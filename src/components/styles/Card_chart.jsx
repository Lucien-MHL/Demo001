import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function Cardchart({ data }) {
  const options = {
    chart: {
      zoomType: 'xy',
      width: 333,
      height: 192,
      margin: [10, -20, 25, 25],
      backgroundColor: null
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    title: {
      text: null
    },
    xAxis: {
      categories: [
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19'
      ],
      top: 0,
      height: 167,
      tickColor: '#3E3E3E',
      tickLength: 10,
      tickWidth: 1,
      gridLineWidth: 1,
      gridLineColor: '#3E3E3E',
      lineColor: '#3E3E3E',
      labels: {
        style: {
          color: '#000',
          fontSize: '0.75rem'
        }
      }
    },
    yAxis: {
      tickAmount: 5,
      floor: 0,
      ceiling: 1,
      labels: {
        align: 'right',
        x: -3,
        y: 5,
        style: {
          color: '#000',
          fontSize: '0.75rem'
        }
      },
      gridLineColor: '#3E3E3E',
      title: {
        text: null
      }
    },
    tooltip: {
      enabled: true,
      borderColor: '#cedf83',
      useHTML: true,
      headerFormat: '<table><tr><th colspan="2">當日發電量 {point.key}時</th></tr>',
      pointFormat:
        '<tr><td colspan="1" style="background-color: {series.color};width: .55rem; "></td>' +
        '<td style="text-align: middle;">{series.name} <b>{point.y}</b>' +
        '  ' +
        '<small style="font-size:.5rem">kWp</small></td></tr>',
      footerFormat: '</table>',
      // valueSuffix: 'kWp',
      valueDecimals: 2,
      shared: true
    },
    series: [
      {
        name: '預估',
        type: 'spline',
        zIndex: 3,
        lineColor: '#34237f',
        color: '#34237f',
        data: data.predicKWP,
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false
            }
          }
        }
      },
      {
        name: '實際',
        type: 'areaspline',
        lineColor: '#cedf83',
        color: '#cedf83',
        fillOpacity: 0.7,
        data: data.rcvKWP,
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false
            }
          }
        }
      }
    ]
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Cardchart
