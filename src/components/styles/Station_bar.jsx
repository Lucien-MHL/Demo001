import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function Stationbar() {
  const options = {
    chart: {
      type: 'bar',
      width: 460,
      height: 1000,
      marginTop: 16,
      marginLeft: 0,
      backgroundColor: null
    },
    title: {
      text: null
    },
    xAxis: {
      categories: [
        '立法院',
        '申評鋼鐵',
        '前進國小',
        '大肚國小',
        '山里國中',
        '立法院',
        '申評鋼鐵',
        '前進國小',
        '大肚國小',
        '山里國中',
        '立法院',
        '申評鋼鐵',
        '前進國小',
        '大肚國小',
        '山里國中'
      ],
      title: {
        text: null
      },
      labels: {
        align: 'left',
        x: 5,
        y: -20,
        style: {
          color: '#000',
          fontSize: '1rem'
        }
      },
      min: 0,
      gridLineWidth: 0,
      gridLineColor: '#3E3E3E',
      lineColor: '#3E3E3E'
    },
    yAxis: {
      gridLineColor: '#3E3E3E',
      tickInterval: 1,
      tickAmount: 6,
      title: {
        text: null
      },
      labels: {
        enabled: false, // xaxis
        style: {
          color: '#000'
        }
      }
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointWidth: 30,
        borderWidth: 0,
        dataSorting: {
          enabled: true,
          matchByName: true
        },
        colorByPoint: true,
        colors: [
          '#FFA600',
          '#FF6361',
          '#BC5090',
          '#6143E7',
          '#58508D',
          '#47CCFB',
          '#2C83A2',
          '#003F5C',
          '#CEDF83',
          '#70AD7B',
          '#2F664F'
        ]
      },
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [
      {
        data: [
          2.6, 1.5, 3.7, 2.9, 3.3, 2.6, 1.5, 3.7, 2.9, 3.3, 2.6, 1.5, 3.7, 2.9,
          3.3
        ]
      }
    ]
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Stationbar
