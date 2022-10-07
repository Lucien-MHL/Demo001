import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function StationLineChart() {
  const options = {
    chart: {
      type: 'spline',
      spacing: [0, 0, 0, 0],
      backgroundColor: null,
      plotBackgroundColor: 'rgba(255, 255, 255, 0.9)'
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
      tickmarkPlacement: 'on',
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
      endOnTick: false,
      tickInterval: 0.1,
      labels: {
        align: 'right',
        x: -10,
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
      enabled: false
    },
    series: [
      {
        lineColor: '#34237f',
        color: '#34237f',
        data: [
          0, 0.003402, 0.077848, 0.246852, 0.422661, 0.537131, 0.572253,
          0.373931, 0.584861, 0.6482, 0.560546, 0.427664, 0.255357, 0.069743, 0,
          0
        ],
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

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ style: { width: '100%', height: '100%' } }}
    />
  )
}

export default StationLineChart
