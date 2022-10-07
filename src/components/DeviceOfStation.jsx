import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import Download from './styles/Download.jsx'
import DatePicker from './styles/DatePicker.jsx'
import {
  widthAnalyze,
  time,
  fakeInverterData
} from '../fakeAPI/fake_DeviceOfStation_data'
import EverythingCompare from './styles/EverythingCompare.jsx'
import { obj } from '../reducer/a'

const Section = styled.section`
  width: 100%;
  height: 100%;
`

const Header = styled.header`
  width: 100%;
  height: 23%;
  display: flex;
  align-items: flex-start;
`

const Body = styled.div`
  width: 100%;
  height: 77%;
  display: flex;
`

const Selector = styled.div`
  width: 15%;
  margin-right: 5%;
  font-size: 1.25rem;
  padding-top: 2.375rem;
  padding-left: 1.75rem;

  button {
    margin-left: 1.5rem;
    padding-left: 1rem;
    border: 1px solid #e4e4e4;
    background-color: transparent;
    line-height: 30px;
    font-size: 1.25rem;
    cursor: pointer;

    .arrow {
      width: auto;
      height: 30px;
      padding: 0.5rem;
      fill: #fff;
      background-color: #000;
      vertical-align: bottom;
      margin-left: 0.625rem;
    }
  }
`

const Group = styled.ul`
  width: 55%;
  margin-right: 5%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.375rem;

  .list_item {
    .container {
      padding: 2px 8px;
      margin-bottom: 0.5rem;
      display: flex;
      background-color: #f2f2f2;
      height: max-content;
      width: max-content;

      .text {
        margin-right: 8px;
        font-size: 14px;
      }

      .close {
        border: none;
        cursor: pointer;

        svg {
          width: 10px;
          height: auto;
          fill: #a5a5a5;
          vertical-align: middle;
          pointer-events: none;
        }
      }
    }
  }
`

const Setting = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  padding-top: 1.75rem;
`

const LegendBox = styled.div`
  width: 22%;
  height: 84.298%;
  border-radius: 30px;
  margin: auto;
  margin-right: 0;
  padding: 1.5rem 1rem 0 2.5rem;
  background: rgba(255, 255, 255, 0.9);

  .time {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.05em;
    color: rgba(120, 120, 120, 0.9);
    margin-bottom: 0.75rem;
    text-align: end;
  }

  .tooltip {
    margin-right: 2.5rem;
  }
`

const Data = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.875rem;

  .key,
  .value {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.05em;
  }

  .key::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 8px;
    background-color: ${({ color }) => color};
    margin-right: 1rem;
  }

  .value::after {
    content: '${({ unit }) => unit}';
  }
`

const SideMenuContainer = styled.section`
  z-index: 99;
  position: absolute;
  top: 26.5rem;
  left: 116px;
  width: ${({ menu }) => (menu ? '366px' : '24px')};
  height: 650px;
  overflow: hidden;
  transition: ${({ menu }) => (menu ? 'width 0.1s' : 'width 1.5s')};
`

const SideMenu = styled.section`
  top: 26.5rem;
  left: 116px;
  width: 320px;
  height: 600px;
  background: rgba(251, 251, 251, 0.95);
  box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.15);
  border-radius: 5px 0 5px 5px;
  padding: 29px 25px;
  transform: ${({ menu }) => (menu ? 'translateX(0)' : 'translateX(-100%)')};
  box-shadow: ${({ menu }) => (menu ? '7px 7px 20px rgba(0, 0, 0, 0.15)' : 'none')};
  transition: all 1.5s;

  h2 {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.05em;
    margin-bottom: 14px;
  }

  .setting_box {
    width: 269px;
    height: 435px;
    background: #f5f5f5;
    border-radius: 5px 0px 0px 5px;
    padding: 1rem 10px 0 18.5px;
    overflow-y: overlay;

    &::-webkit-scrollbar-thumb {
      background: rgba(91, 91, 91, 0.9);
      border-radius: 3px;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }

    .card_header {
      display: flex;
      justify-content: space-between;
      padding: 4px 6px 9px 2rem;
      border-bottom: 1px solid rgba(126, 125, 125, 0.9);

      .title {
        line-height: 19px;
      }

      .toggle_btn {
        width: 14px;
        transform: rotateX(180deg);
      }
    }

    .card_body {
      padding-left: 31px;
      margin-bottom: 31px;

      .list {
        display: flex;
        align-items: center;
        margin-top: 8.5px;

        .checkbox {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 0.75px solid #a3a3a3;
          margin-right: 20px;
          cursor: pointer;
          background-color: transparent;
        }

        .active {
          background-color: #000;
        }

        .text {
          margin-right: 3px;
        }

        .unit {
          line-height: 16px;
          font-size: 14px;
          color: #898989;
        }
      }
    }
  }

  .clear {
    width: fit-content;
    padding: 8px;
    margin-top: 2rem;
    margin-left: 214px;
    background: #221d1d;
    border-radius: 5px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    cursor: pointer;

    &:hover {
      background: #474444;
      scale: 1.05;
    }
  }

  .switch {
    box-shadow: ${({ menu }) => (menu ? '7px 8px 7.3px rgb(0 0 0 / 7%)' : 'none')};
    background: ${({ menu }) => (menu ? 'rgba(251, 251, 251, 0.95)' : '#000')};
    position: absolute;
    top: 0;
    right: -23px;
    width: 23px;
    height: 50px;
    border: none;
    border-radius: ${({ menu }) => (menu ? '0 5px 5px 0' : '5px')};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: ${({ menu }) => (menu ? 'all 0.3s .15s' : 'all 0.3s 1s')};

    svg {
      pointer-events: none;
      transition: ${({ menu }) => (menu ? 'all 0.3s' : 'all 0.3s 1s')};
      fill: ${({ menu }) => (menu ? 'rgba(91, 91, 91, 0.9)' : '#fff')};
      transform: ${({ menu }) => (menu ? 'rotateZ(90deg)' : 'rotateZ(270deg)')};
      height: 10px;
      width: 22px;
      transition: all 1s;
    }
  }
`

const inverterDate = fakeInverterData()

function DeviceOfStation() {
  const [switchMenu, setSwitchMenu] = useState(false)
  const [chartArray, setChartArray] = useState([inverterDate[0].charDate[0]])
  const { CustomTooltip } = obj
  const [pointNum, setPointNum] = useState(0)
  const width = widthAnalyze(chartArray)
  const currentTime = time(pointNum)

  const data = useMemo(() => ({ setPointNum, chartArray }), [chartArray])

  const handleClose = (currentIndex) => {
    const findOthers = (item) => item.id !== currentIndex
    const newArr = chartArray.filter(findOthers)
    if (!newArr.length) {
      setChartArray([inverterDate[0].charDate[0]])
    } else {
      setChartArray(newArr)
    }
  }

  const handleClassName = (currentIndex) => {
    const findMatch = (item) => item.id === currentIndex

    if (!chartArray.some(findMatch)) {
      // 沒有 match 時執行以下程式碼
      const arrA = inverterDate.filter((item) => item.charDate.some(findMatch))
      const result = arrA[0].charDate.filter(findMatch)
      const newArr = [...chartArray, result[0]]
      setChartArray(newArr)
    } else {
      // match 時執行以下函數
      handleClose(currentIndex)
    }
  }

  const removeAll = () => {
    setChartArray([inverterDate[0].charDate[0]])
  }

  return (
    <Section>
      <SideMenuContainer menu={switchMenu}>
        <SideMenu menu={switchMenu}>
          <h2>參數設定</h2>
          <div className='setting_box'>
            {inverterDate.map((item) => (
              <div className='card' key={item.id}>
                <div className='card_header'>
                  <p className='title'>{item.name}</p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 14 11'
                    className='toggle_btn'
                  >
                    <path d='M6.53525 9.12339L0.192736 2.68245C-0.0642453 2.42547 -0.0642453 2.00992 0.192736 1.75294L0.580941 1.36473C0.837922 1.10775 1.25347 1.10775 1.51045 1.36473L7 6.95818L12.4896 1.3702C12.7465 1.11322 13.1621 1.11322 13.4191 1.3702L13.8073 1.75841C14.0642 2.01539 14.0642 2.43093 13.8073 2.68792L7.46475 9.12886C7.20777 9.38037 6.79223 9.38037 6.53525 9.12339Z' />
                  </svg>
                </div>
                <ul className='card_body'>
                  {item.charDate.map((element) => (
                    <li className='list' key={element.id}>
                      <button
                        type='button'
                        className={
                          chartArray.some((current) => current.id === element.id)
                            ? 'checkbox active'
                            : 'checkbox'
                        }
                        onClick={() => handleClassName(element.id)}
                      >
                        {' '}
                      </button>
                      <span className='text'>{element.shortName}</span>
                      <span className='unit'>{element.unit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button type='button' className='clear' onClick={removeAll}>
            清除
          </button>
          <button
            type='button'
            className='switch'
            onClick={() => setSwitchMenu(!switchMenu)}
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 11'>
              <path d='M6.53525 9.12339L0.192736 2.68245C-0.0642453 2.42547 -0.0642453 2.00992 0.192736 1.75294L0.580941 1.36473C0.837922 1.10775 1.25347 1.10775 1.51045 1.36473L7 6.95818L12.4896 1.3702C12.7465 1.11322 13.1621 1.11322 13.4191 1.3702L13.8073 1.75841C14.0642 2.01539 14.0642 2.43093 13.8073 2.68792L7.46475 9.12886C7.20777 9.38037 6.79223 9.38037 6.53525 9.12339Z' />
            </svg>
          </button>
        </SideMenu>
      </SideMenuContainer>
      <Header>
        <Selector>
          變流器
          <button type='button'>
            INV 001
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 14 11'
              className='arrow'
            >
              <path d='M6.53525 9.12339L0.192736 2.68245C-0.0642453 2.42547 -0.0642453 2.00992 0.192736 1.75294L0.580941 1.36473C0.837922 1.10775 1.25347 1.10775 1.51045 1.36473L7 6.95818L12.4896 1.3702C12.7465 1.11322 13.1621 1.11322 13.4191 1.3702L13.8073 1.75841C14.0642 2.01539 14.0642 2.43093 13.8073 2.68792L7.46475 9.12886C7.20777 9.38037 6.79223 9.38037 6.53525 9.12339Z' />
            </svg>
          </button>
        </Selector>
        <Group>
          {chartArray.map((item) => (
            <li className='list_item' key={item.id} style={{ width: `${width}px` }}>
              <div className='container'>
                <p className='text'>{item.name}</p>
                <button
                  className='close'
                  type='button'
                  onClick={() => handleClose(item.id)}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'>
                    <path d='M6.06148 5L9.26648 1.795L9.92742 1.13406C10.0249 1.03656 10.0249 0.878125 9.92742 0.780625L9.22023 0.0734376C9.12273 -0.0240624 8.96429 -0.0240624 8.86679 0.0734376L5.00085 3.93937L1.13492 0.073125C1.03742 -0.024375 0.878979 -0.024375 0.781479 0.073125L0.0739795 0.780313C-0.0235205 0.877813 -0.0235205 1.03625 0.0739795 1.13375L3.94023 5L0.0739795 8.86594C-0.0235205 8.96344 -0.0235205 9.12187 0.0739795 9.21937L0.781167 9.92656C0.878667 10.0241 1.0371 10.0241 1.1346 9.92656L5.00085 6.06063L8.20585 9.26562L8.86679 9.92656C8.96429 10.0241 9.12273 10.0241 9.22023 9.92656L9.92742 9.21937C10.0249 9.12187 10.0249 8.96344 9.92742 8.86594L6.06148 5Z' />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </Group>
        <Setting>
          <DatePicker />
          <Download />
        </Setting>
      </Header>
      <Body>
        <CustomTooltip.Provider value={data}>
          <EverythingCompare />
          <LegendBox>
            <div className='time'>{`${currentTime.year}/${currentTime.month}/${currentTime.day} ${currentTime.hour}:00`}</div>
            <ul className='tooltip'>
              {chartArray.map((item) => (
                <Data color={item.color} unit={item.unit} key={item.id}>
                  <span className='key'>{item.name}</span>
                  <span className='value'>{`${item.data[pointNum]} `}</span>
                </Data>
              ))}
            </ul>
          </LegendBox>
        </CustomTooltip.Provider>
      </Body>
    </Section>
  )
}

export default DeviceOfStation
