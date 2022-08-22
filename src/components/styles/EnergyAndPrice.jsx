import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function EnergyAndPrice() {
  const options = {
    chart: {
      // zoomType: 'xy'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    xAxis: [
      {
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
        gridLineWidth: 1,
        gridLineColor: '#3E3E3E',
        labels: {
          style: {
            color: '#000',
            fontSize: '14px'
          }
        }
      }
    ],
    tooltip: {
      shared: true,
      headerFormat: '',
      style: {
        color: '#333333',
        fontSize: '1.25rem'
      },
      followPointer: true
    },
    yAxis: [
      {
        // Primary yAxis
        title: {
          text: 'NTD',
          style: {
            color: '#8E8E8E',
            fontSize: '14px'
          },
          align: 'high'
        },
        labels: {
          format: '{value}',
          style: {
            color: '#000',
            fontSize: '14px'
          }
        },
        opposite: true,
        gridLineColor: '#3E3E3E'
      },
      {
        // Secondary yAxis
        title: {
          text: 'kWh',
          style: {
            color: '#8E8E8E',
            fontSize: '14px'
          },
          align: 'high'
        },
        labels: {
          format: '{value}',
          style: {
            color: '#000',
            fontSize: '14px'
          }
        },
        gridLineColor: '#3E3E3E'
      }
    ],
    series: [
      {
        name: '售電金額(NTD)',
        type: 'column',
        data: [0, 25, 162, 39, 39, 39, 39, 39, 39, 39, 39, 39, 313, 48, 88, 0],
        color: '#CEDF83'
      },
      {
        name: '發電量(kWh)',
        type: 'spline',
        data: [
          0, 4.15, 26.62, 6.38, 26.62, 26.62, 26.62, 26.62, 26.62, 26.62, 26.62,
          26.62, 51.63, 7.97, 14.49, 0
        ],
        color: '#34237F',
        yAxis: 1
      }
    ]
  }
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default EnergyAndPrice
