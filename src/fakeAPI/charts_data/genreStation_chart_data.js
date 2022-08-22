import fakeAllStations from '../fake_station_all'

export const genreStation = {
  title: {
    text: undefined
  },
  tooltip: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  chart: {
    type: 'pie',
    margin: 0,
    spacing: 0,
    backgroundColor: null
  },
  // legend: {
  //   layout: 'vertical',
  //   align: 'right',
  //   // verticalAlign: 'middle',
  //   itemMarginTop: 10,
  //   squareSymbol: false,
  //   symbolRadius: 0,
  //   symbolHeight: 18,
  //   symbolWidth: 92,
  //   itemStyle: {
  //     fontSize: '16px'
  //   }
  // },
  plotOptions: {
    pie: {
      allowPointSelect: false,
      dataLabels: {
        enabled: true,
        format: '<b>{point.y}</b>'
      },
      size: '245px',
      center: ['25%', '60%']
    },
    series: {
      enableMouseTracking: false
    }
  },
  series: [
    {
      name: '類型',
      data: [
        {
          name: '屋頂型',
          y: fakeAllStations.filter((item) => item.type === '屋頂型').length,
          color: '#124C67'
        },
        {
          name: '地面型',
          y: fakeAllStations.filter((item) => item.type === '地面型').length,
          color: '#2C83A2'
        },
        {
          name: '水面型',
          y: fakeAllStations.filter((item) => item.type === '水面型').length,
          color: '#70AD7B'
        },
        {
          name: '未定義',
          y: fakeAllStations.filter((item) => item.type === '未定義').length,
          color: '#2F664F'
        }
      ]
    }
  ]
}
