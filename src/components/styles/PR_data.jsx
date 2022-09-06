import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function PRdata({ value }) {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: null,
      height: '100%',
      spacing: [0, 0, 0, 0]
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: `<h2>${value.PR}</h2><p>PR<small>%<small/></p>`,
      style: {
        fontSize: '1rem',
        textAlign: 'center'
      },
      useHTML: true
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      series: {
        states: {
          hover: {
            enabled: false
          },
          inactive: {
            opacity: 1
          }
        }
      }
    },
    series: [
      {
        borderWidth: 0,
        name: 'Subscribers',
        data: [
          {
            y: value.PR,
            name: 'Online',
            color: '#CEDF83'
          },
          {
            y: 100 - value.PR,
            name: 'Offline',
            color: '#34237F'
          }
        ],
        // size: '113.90%',
        innerSize: '65.3%',
        showInLegend: false,
        dataLabels: {
          enabled: false
        }
      }
    ],
    credits: {
      enabled: false
    }
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        style: {
          width: '76.63%',
          margin: '0 auto'
        }
      }}
    />
  )
}

export default PRdata
