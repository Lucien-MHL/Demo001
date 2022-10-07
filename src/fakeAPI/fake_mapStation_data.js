function produceInverter(amount) {
  const randomNum = (num, decimal, min, max) => {
    let resultNum
    if (!max && !min) {
      resultNum = Number((Math.random() * 10 ** num).toFixed(decimal))
    }
    if (num === 'range') {
      resultNum = Number((Math.random() * (max - min + 1) + min).toFixed(decimal))
    }
    return resultNum
  }
  const randomAmount = () => {
    const num = Math.floor(Math.random() * 10) + 3
    const arrA = []
    const arrB = []
    const arrC = []
    const arrD = []
    const arrE = []
    const arrF = []
    const arrG = []
    for (let i = 0; i < num; i += 1) {
      const decimal = randomNum(0, 1) < 0.6 ? 1 : 2
      arrA.push(`${i + 1}`)
      arrB.push(randomNum('range', decimal, 27, 39))
      arrC.push(randomNum('range', 1, 1.3, 7.2))
      arrD.push(randomNum('range', decimal, 550, 750))
      arrE.push(randomNum('range', decimal, 2, 8))
      arrF.push(randomNum('range', decimal, 71, 87))
      arrG.push(randomNum('range', decimal, 89, 119))
    }

    return {
      arrA,
      arrB,
      arrC,
      arrD,
      arrE,
      arrF,
      arrG
    }
  }

  const diffData = () => {
    const arr = []
    for (let i = 0; i < amount; i += 1) {
      arr.push(randomAmount())
    }

    return arr
  }

  const diffDataObj = diffData()

  const result = []
  for (let i = 0; i < amount; i += 1) {
    result.push({
      id: i,
      name: i < 9 ? `INV 00${i + 1}` : `INV 0${i + 1}`,
      position: i < 9 ? `./imgs/INV0${i + 1}.PNG` : `./imgs/INV${i + 1}.PNG`,
      detail: [
        {
          id: 'SN01',
          key: '變流器',
          value: i < 9 ? `INV 00${i + 1}` : `INV 0${i + 1}`
        },
        { id: 'SN02', key: '設備序號', value: `TN00579044${35 + i + 2}` },
        { id: 'SN03', key: '設備型號', value: 'Delta M70A 262' },
        {
          id: 'SN04',
          key: '直流電功率',
          value: randomNum(2, 2),
          unit: '(kw)'
        },
        {
          id: 'SN05',
          key: '變流器溫度',
          value: randomNum('range', 2, 32, 79),
          unit: '(℃)'
        },
        {
          id: 'SN06',
          key: '建置容量',
          value: randomNum(2, 2),
          unit: '(kWp)'
        },
        {
          id: 'SN07',
          key: '累積發電量',
          value: randomNum(3, 0),
          unit: '(kWh)'
        },
        {
          id: 'SN08',
          key: '日照',
          value: randomNum(3, 0),
          unit: '(W/m²)'
        }
      ],
      data: [
        {
          data: diffDataObj[i].arrA,
          width: {
            width: '10.784%'
          },
          id: 'A'
        },
        {
          data: diffDataObj[i].arrB,
          width: {
            width: '17.2%'
          },
          id: 'B'
        },
        {
          data: diffDataObj[i].arrC,
          width: {
            width: '11.82955%'
          },
          id: 'C'
        },
        {
          data: diffDataObj[i].arrD,
          width: {
            width: '16.8321%'
          },
          id: 'D'
        },
        {
          data: diffDataObj[i].arrE,
          width: {
            width: '12%'
          },
          id: 'E'
        },
        {
          data: diffDataObj[i].arrF,
          width: {
            width: '14.545%'
          },
          id: 'F'
        },
        {
          data: diffDataObj[i].arrG,
          width: {
            width: '16.73481%'
          },
          id: 'G'
        }
      ],
      mainPic:
        i < Math.floor(amount / 2)
          ? { id: 'IMG01', src: './imgs/大發禹青_01.png' }
          : { id: 'IMG02', src: './imgs/大發禹青_02.png' },
      group: i < Math.floor(amount / 2) ? 'A' : 'B'
    })
  }

  return result
}

function processInverterData(amount) {
  const arr = produceInverter(amount)

  return {
    basic: arr.map((item) => ({
      id: item.id,
      name: item.name,
      img: item.position,
      group: item.group
    })),
    detail: arr.map((item) => item.detail),
    digital: arr.map((item) => item.data),
    common: {
      tableHead: [
        {
          id: 't01',
          name: '監控點',
          spacing: {
            padding: '1rem 0',
            width: '10.784%'
          }
        },
        {
          id: 't02',
          unit: 'kWp',
          name: '容量',
          spacing: {
            padding: '1rem 0',
            width: '17.2%'
          }
        },
        {
          id: 't03',
          unit: 'kW',
          name: '功率',
          spacing: {
            padding: '1rem 0',
            width: '11.82955%'
          }
        },
        {
          id: 't04',
          unit: 'V',
          name: '電壓',
          spacing: {
            padding: '1rem 0',
            width: '16.8321%'
          }
        },
        {
          id: 't05',
          unit: 'A',
          name: '電流',
          spacing: {
            padding: '1rem 0',
            width: '12%'
          }
        },
        {
          id: 't06',
          unit: '%',
          name: 'RA',
          spacing: {
            padding: '1rem 0',
            width: '14.545%'
          }
        },
        {
          id: 't07',
          unit: '%',
          name: '發電比較',
          spacing: {
            padding: '1rem 0',
            width: '16.73481%'
          }
        }
      ],
      thumbnail: [
        {
          id: 'IMG01',
          src: './imgs/大發禹青_01.png',
          alt: '大發禹青_01',
          group: 'A'
        },
        {
          id: 'IMG02',
          src: './imgs/大發禹青_02.png',
          alt: '大發禹青_02',
          group: 'B'
        }
      ]
    }
    // completeInverters: arr
  }
}

export const dateUpdate = () => {
  const date = new Date()
  const time = {
    year: date.getFullYear(),
    month:
      date.getMonth() + 1 <= 9
        ? `0${date.getMonth() + 1}`
        : `${date.getMonth() + 1}`,
    day: date.getDate() <= 9 ? `0${date.getDate()}` : `${date.getDate()}`,
    minutes: date.getMinutes(),
    hours: date.getHours()
  }

  return `${time.year}/${time.month}/${time.day} ${time.hours}:${time.minutes}`
}

export default processInverterData
