import React, { useContext } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { obj } from '../../reducer/a'

function EverythingCompare() {
  const { CustomTooltip } = obj
  const { setPointNum, chartArray } = useContext(CustomTooltip)
  const options = {
    chart: {
      type: 'line',
      backgroundColor: null,
      plotBackgroundColor: '#FFFFFFE5'
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    legend: {
      verticalAlign: 'top'
    },
    xAxis: {
      gridLineWidth: 1,
      gridLineColor: '#3E3E3E',
      labels: {
        style: {
          color: '#000',
          fontSize: '14px'
        },
        y: 35
      },
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
      tickWidth: 1,
      tickLength: 15,
      tickColor: '#000',
      lineColor: '#000',
      minorTickLength: 100
    },
    yAxis: {
      title: {
        text: ''
      },
      gridLineColor: '#3E3E3E'
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: '#666666',
          lineWidth: 1
        }
      },
      series: {
        cursor: 'pointer',
        point: {
          events: {
            // eslint-disable-next-line func-names, object-shorthand
            mouseOver: function () {
              // eslint-disable-next-line react/no-this-in-sfc
              setPointNum(this.x)
            }
          }
        }
      }
    },
    series: chartArray
  }
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        style: {
          width: '75%',
          height: '100%',
          margin: '0'
        }
      }}
    />
  )
}

export default EverythingCompare
