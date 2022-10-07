function rangeRandom(min, max) {
  let arr = []
  while (arr.length < 16) {
    const resultNum = Number((Math.random() * (max - min + 1) + min).toFixed(2))
    arr = [...arr, resultNum]
  }
  return arr
}

const groupName = ['環境感測', '變流器', '監控點']
const envValue = [
  { name: '日照', unit: 'W/m²' },
  { name: '溫度', unit: '°C' }
]
const deviceValue = [
  { name: '交流發電量', unit: 'kWh' },
  { name: '三相電流', unit: 'A' },
  { name: '三相電壓', unit: 'V' },
  { name: '三相電功率', unit: 'kW' },
  { name: '交流頻率', unit: 'Hz' },
  { name: '直流電功率', unit: 'kW' },
  { name: '溫度', unit: '°C' },
  { name: '平均發電量', unit: 'kWh/kWp' },
  { name: '平均發電量比較', unit: '%' },
  { name: 'PR', unit: '%' }
]
const pointValue = [
  { name: '直流電功率', unit: 'kW' },
  { name: '直流電流', unit: 'A' },
  { name: '直流電壓', unit: 'V' },
  { name: '直流電發電效率RA', unit: '%' },
  { name: '平均發電量比較', unit: '%' }
]

const colors = [
  '#58508D',
  '#6143E7',
  '#2C83A2',
  '#47CCFB',
  '#D2FFBC',
  '#CEDF83',
  '#70AD7B',
  '#2F664F',
  '#003F5C',
  '#000000',
  '#949394',
  '#B17448',
  '#FBE8AF',
  '#FFA600',
  '#FF6361',
  '#C5585C',
  '#BC5090'
]

export function fakeInverterData() {
  const arr = []

  function handleInsideData(num) {
    const arrA = [envValue, deviceValue, pointValue]
    const result = arrA[num].map((item, index) => ({
      id: `D0${num + 1}${index < 10 ? `0${index}` : `${index}`}`,
      name: `${groupName[num]} - ${item.name}`,
      shortName: item.name,
      unit: item.unit,
      data: rangeRandom(
        item.name.length * 10 * Math.random(),
        Math.floor(Math.random() * 3200) / item.name.length
      ),
      color: colors.splice(0, 1)[0]
    }))

    return result
  }

  for (let i = 0; i < groupName.length; i += 1) {
    arr.push({
      id: `D0${i + 1}`,
      name: groupName[i],
      charDate: handleInsideData(i)
    })
  }

  return arr
}

export function widthAnalyze(array) {
  const splitChunk = (obj, num) => obj.name.split(' - ')[num].length
  const widthArr = array.map(
    (item) => (splitChunk(item, 0) + splitChunk(item, 1)) * 14 + 62
  )
  const width = Math.max(...widthArr)

  return width
}

const rule = [
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
]

const date = new Date()

export function time(pointNum) {
  const current = {
    year: date.getFullYear(),
    month:
      date.getMonth() + 1 <= 9
        ? `0${date.getMonth() + 1}`
        : `${date.getMonth() + 1}`,
    day: date.getDate() <= 9 ? `0${date.getDate()}` : `${date.getDate()}`,
    hour: rule[pointNum]
  }

  return current
}
