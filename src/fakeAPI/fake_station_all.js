const fakeAllStations = [
  {
    photo:
      'https://frontendstaticfile.blob.core.windows.net/station/20220623T113258-2017001.jpg',
    name: '台北中山',
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
    name: '台南麻豆',
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
    name: '台中梧棲 1',
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
    name: '高雄鳳山',
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
    name: '桃園平鎮',
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
    name: '宜蘭蘇澳',
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
    name: '台南北門',
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
    name: '台中梧棲 2',
    type: '屋頂型',
    id: 108,
    dcc: 1284.658,
    PR: 19.87,
    dailyEnergy: 198.56,
    YearlyEnergy: 122713.333
  }
]

export const solarData = [
  {
    name: '總發電量',
    unit: '度(kWh)',
    dailyTotalNum: 12141,
    yearlyTotalNum: 52569134,
    id: 1
  },
  {
    name: '售電金額',
    unit: '元(NTD)',
    dailyTotalNum: 129281,
    yearlyTotalNum: 95287271,
    id: 2
  },
  {
    name: '油當量',
    unit: '公斤(kg)',
    dailyTotalNum: 14119.98,
    yearlyTotalNum: 4520132,
    id: 3
  },
  {
    name: '總減碳量',
    unit: '公斤(kg)',
    dailyTotalNum: 6094.78,
    yearlyTotalNum: 26389705,
    id: 4
  },
  {
    name: '造林效益',
    unit: '公頃(ha)',
    dailyTotalNum: 0.61,
    yearlyTotalNum: 2671,
    id: 5
  }
]

export default fakeAllStations
