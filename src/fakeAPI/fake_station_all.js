const fakeAllStations = [
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220623T113258-2017001.jpg',
    name: '立法院',
    type: '屋頂型',
    id: 101,
    dcc: 99,
    PR: 78.72,
    dailyEnergy: 878.5,
    YearlyEnergy: 62804.09
  },
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220804T183722-2022055.jpg',
    name: '阿公店水庫',
    type: '水面型',
    id: 102,
    dcc: 9993.856,
    PR: 97.0,
    dailyEnergy: 17122.0,
    YearlyEnergy: 8818952.4
  },
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220331T164028-2020022.jpg',
    name: '伸坪鋼鐵',
    type: '屋頂型',
    id: 103,
    dcc: 471.82,
    PR: 68.92,
    dailyEnergy: 541.28,
    YearlyEnergy: 311568.33
  },
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220331T164113-2020024.jpg',
    name: '杰士電池',
    type: '屋頂型',
    id: 104,
    dcc: 499.5,
    PR: 0,
    dailyEnergy: 0,
    YearlyEnergy: 0
  },
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220331T170912-2021033.jpg',
    name: '中州科技大學',
    type: '未定義',
    id: 105,
    dcc: 179.8,
    PR: 88.26,
    dailyEnergy: 247.85,
    YearlyEnergy: 101710.09
  },
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220804T183548-2022058.jpg',
    name: '光榮國小',
    type: '屋頂型',
    id: 106,
    dcc: 167.35,
    PR: 75.29,
    dailyEnergy: 436.88,
    YearlyEnergy: 188079.2
  },
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220804T182837-2022060.jpg',
    name: '前進國小',
    type: '屋頂型',
    id: 107,
    dcc: 321.16,
    PR: 91.52,
    dailyEnergy: 298.0,
    YearlyEnergy: 122713.08
  },
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220331T163806-2020015.jpg',
    name: '彰農 彰化農會',
    type: '屋頂型',
    id: 108,
    dcc: 1284.658,
    PR: 19.87,
    dailyEnergy: 198.56,
    YearlyEnergy: 122713.333
  },
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220331T164215-2020027.jpeg',
    name: '中櫃停車棚',
    type: '地面型',
    id: 109,
    dcc: 123123.658,
    PR: 76.93,
    dailyEnergy: 28.956,
    YearlyEnergy: 10325.01
  },
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220331T164951-2021017.jpg',
    name: '崙東九',
    type: '地面型',
    id: 110,
    dcc: 231.16,
    PR: 78.13,
    dailyEnergy: 1720.3,
    YearlyEnergy: 785151.6
  },
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220623T104504-7777779.jpeg',
    name: 'Zone No.3',
    type: '地面型',
    id: 111,
    dcc: 515.16,
    PR: 50,
    dailyEnergy: 494.18,
    YearlyEnergy: 205740.16
  },
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220804T183248-2022077.jpg',
    name: '內埔國中_地面型',
    type: '地面型',
    id: 112,
    dcc: 7657.16,
    PR: 66.12,
    dailyEnergy: 1947.0,
    YearlyEnergy: 892679.08
  }
]

export const solarData = [
  {
    name: '總發電量',
    unit: '度(kWh)',
    dailyTotalNum: 141181,
    yearlyTotalNum: 52569134,
    id: 1
  },
  {
    name: '售電金額',
    unit: '元(NTD)',
    dailyTotalNum: 282648,
    yearlyTotalNum: 95287271,
    id: 2
  },
  {
    name: '油當量',
    unit: '公斤(kg)',
    dailyTotalNum: 12139,
    yearlyTotalNum: 4520132,
    id: 3
  },
  {
    name: '總減碳量',
    unit: '公斤(kg)',
    dailyTotalNum: 70873,
    yearlyTotalNum: 26389705,
    id: 4
  },
  {
    name: '造林效益',
    unit: '公頃(ha)',
    dailyTotalNum: 2586867,
    yearlyTotalNum: 2671,
    id: 5
  }
]

export default fakeAllStations
