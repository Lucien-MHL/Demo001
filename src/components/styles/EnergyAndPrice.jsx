import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function EnergyAndPrice() {
  const options = {
    chart: {
      spacing: [48, 8.26, 36.91, 15.99],
      backgroundColor: null
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
    plotOptions: {
      series: {
        pointWidth: 40
      }
    },
    xAxis: [
      {
        categories: ['04', '06', '08', '10', '12', '14', '16', '18'],
        gridLineWidth: 1,
        gridLineColor: '#3E3E3E',
        labels: {
          style: {
            color: '#000',
            fontSize: '14px'
          },
          y: 35
        },
        tickmarkPlacement: 'on',
        tickWidth: 1,
        tickLength: 15,
        tickColor: '#000',
        lineColor: '#000',
        minorTickLength: 100,
        title: {
          text: 'Time',
          style: {
            fontSize: '14px'
          },
          align: 'high',
          offset: 0,
          y: 18,
          x: 40
        }
      }
    ],
    tooltip: {
      shared: true,
      headerFormat: '',
      pointFormat: '{series.name}: <b>{point.y}</b><br/>'
    },
    yAxis: [
      {
        // Primary yAxis
        title: {
          text: 'kWh',
          style: {
            color: '#8E8E8E',
            fontSize: '14px'
          },
          align: 'high'
        },
        labels: {
          // format: '{value}',
          style: {
            color: '#000',
            fontSize: '14px'
          }
        },
        gridLineColor: '#3E3E3E'
      },
      {
        // Secondary yAxis
        title: {
          text: 'NTD',
          style: {
            color: '#8E8E8E',
            fontSize: '14px'
          },
          align: 'high'
        },
        labels: {
          style: {
            color: '#000',
            fontSize: '14px'
          }
        },
        opposite: true,
        gridLineColor: '#3E3E3E',
        showFirstLabel: false
      }
    ],
    series: [
      {
        name: '售電金額',
        type: 'column',
        data: [0, 25, 186, 261, 403, 204, 65, 1],
        color: '#CEDF83',
        pointPlacement: 'on',
        yAxis: 1,
        tooltip: {
          valueSuffix: ' NTD'
        }
      },
      {
        name: '發電量',
        type: 'spline',
        data: [0, 4.06, 30.58, 42.99, 66.42, 33.66, 10.66, 0.12],
        color: '#34237F',
        tooltip: {
          valueSuffix: ' kWh'
        }
      }
    ]
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        style: {
          backgroundColor: '#FFFFFFE5',
          borderRadius: '30px',
          boxShadow: '7px 7px 20px rgba(0, 0, 0, 0.15)',
          width: '90%',
          margin: '0 auto',
          height: '353.91px'
        }
      }}
    />
  )
}

export default EnergyAndPrice
