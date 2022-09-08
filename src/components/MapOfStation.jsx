import React, { useState } from 'react'
import styled from 'styled-components'
import processInverterData, { dateUpdate } from '../fakeAPI/fake_mapStation_data'

const calcHeight = (61 / 445.594) * 100

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 6rem 0 3rem;
  display: flex;

  .extend {
    height: 100%;
  }

  .inverters {
    width: 17%;
    margin-right: 2.1%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .icons {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding-top: 1.75rem;

      .meter,
      .meter_active,
      .atypical_meter,
      .current_meter {
        text-align: center;
        line-height: 2;
        font-weight: bold;
        width: 10%;
        margin: 0 calc(20% / 8) calc(20% / 8) 0;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        border: none;
      }

      .atypical_meter {
        background-color: #ff4117;
      }

      .meter {
        background-color: #7ebeda;

        &:hover {
          background-color: #025579;
        }
      }

      .meter_active {
        background-color: #0e8abe;

        &:hover {
          background-color: #025579;
        }
      }

      .current_meter {
        background-color: #035b9b;
      }
    }

    .main-Source {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-content: space-between;
      height: 70%;

      .card {
        margin-bottom: 1.5rem;
        width: 45%;

        .value {
          font-size: 0.875rem;
          padding-bottom: 0.4375rem;
          border-bottom: 1px solid #3c3c3ce5;
          font-weight: 500;
          padding-left: 0.125rem;
        }

        .key {
          font-size: 0.75rem;
          padding-top: 0.4375rem;
          padding-left: 0.125rem;

          .unit {
            font-size: 10px;
          }
        }
      }
    }
  }
  .map {
    width: 37.32%;
    margin-right: 3.7%;

    .planimetry {
      width: 100%;
      height: 77.4%;
      border: 1px solid #515151;
      margin-bottom: 3rem;
      background-color: #fff;

      .inverter_img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .thumbnail {
      width: 100%;
      display: flex;

      .picture {
        width: 65px;
        height: 65px;
        background-color: #fff;
        margin-right: 20px;
        border: 1px solid #3c3c3ce5;
        cursor: pointer;

        .inside_img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          pointer-events: none;
        }
      }

      .main {
        border: 2px solid #3c3c3ce5;
      }
    }
  }
  .data {
    height: 100%;
    width: 39.88%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .selector {
        width: max-content;
        font-size: 1.25rem;
        position: relative;

        button {
          margin-left: 1.5rem;
          font-size: 1.25rem;
          padding-left: 1rem;
          border: 1px solid #e4e4e4;
          background-color: transparent;
          line-height: 30px;
          cursor: pointer;

          .arrow {
            pointer-events: none;
            width: auto;
            height: 30px;
            padding: 0.5rem;
            fill: #fff;
            background-color: #000;
            vertical-align: bottom;
            margin-left: 0.625rem;
          }
        }

        .inv_list {
          z-index: 99;
          position: absolute;
          top: 40px;
          right: 12px;
          height: 321px;
          background-color: #fff;
          border: 0.75px solid #a3a3a3;
          box-shadow: -2px 2px 5px 1px rgba(0, 0, 0, 0.3);
          border-radius: 3px;
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
          /* display: block;
            opacity: 0;
            animation: appear 0.5s forwards; */

          .item {
            border: none;
            padding: 0.5rem calc(0.75rem + 6px) 0.5rem 0.75rem;
            cursor: pointer;

            &:hover {
              background-color: #c5c5c5;
            }

            .item_btn {
              width: 100%;
              height: 100%;
              border: none;
              background-color: transparent;
              margin: 0;
            }
          }
        }

        .close {
          display: none;
        }
      }

      .update_time {
        .date_time {
          margin: 0 0.5rem;
        }
        .loader {
          width: 15px;
          height: 15px;
          cursor: pointer;
        }
      }
    }

    .content {
      width: 100%;
      height: 80%;

      .table_header {
        width: 100%;
        height: calc(${calcHeight}%);
        display: flex;

        li {
          font-size: 1.25rem;
          color: #3c3c3c;
          text-align: center;
          border-bottom: 2px solid #676767;

          .unit {
            padding-left: 4px;
            font-size: 0.875rem;
            color: #898989;
          }
        }
      }

      .table_body {
        display: flex;
        width: 100%;
        height: calc(100% - ${calcHeight}%);
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

        ul {
          text-align: center;
          font-size: 1.25rem;

          li {
            padding: 0.875rem 0;

            & + li {
              border-top: 1px solid #c2c2c2;
            }
          }
        }
      }
    }
  }
`

// eslint-disable-next-line object-curly-newline
const { basic, detail, common, digital } = processInverterData(16)

function MapOfStation() {
  const [inverter, setInverter] = useState(0)
  const [menu, setMenu] = useState(false)
  dateUpdate()

  const handleMenuItemClick = (event) => {
    setInverter(event)
    setMenu(!menu)
  }

  const handleImgClick = (e) => {
    const groupID = e.target.value

    switch (groupID) {
      case 'A': {
        setInverter(0)
        break
      }
      case 'B': {
        setInverter(8)
        break
      }
      default: {
        break
      }
    }
  }

  const switchClassName = (element) => {
    let result
    if (element.id === 15) {
      result = 'atypical_meter'
    } else if (element.id === inverter) {
      result = 'current_meter'
    } else if (element.group === basic[inverter].group) {
      result = 'meter_active'
    } else {
      result = 'meter'
    }

    return result
  }

  return (
    <Section>
      <div className='inverters extend'>
        <div className='icons'>
          {basic.map((item) => (
            <button
              type='button'
              className={switchClassName(item)}
              key={item.id}
              value={item.id}
              onClick={() => setInverter(item.id)}
            >
              {item.id + 1}
            </button>
          ))}
        </div>
        <div className='main-Source'>
          {detail[inverter].map((element) => (
            <div className='card' key={element.id}>
              <div className='value'>{element.value}</div>
              <div className='key'>
                {element.key}
                {element.unit && <span className='unit'>{element.unit}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='map extend'>
        <div className='planimetry'>
          <img
            className='inverter_img'
            src={basic[inverter].img}
            alt={`${basic[inverter].name}.png`}
          />
        </div>
        <div className='thumbnail'>
          {common.thumbnail.map((item) => (
            <button
              type='button'
              key={item.id}
              value={item.group}
              className={
                basic[inverter].group === item.group ? 'picture main' : 'picture'
              }
              onClick={handleImgClick}
            >
              <img className='inside_img' src={item.src} alt={item.alt} />
            </button>
          ))}
        </div>
      </div>
      <div className='data extend'>
        <header className='header'>
          <div className='selector'>
            變流器
            <button type='button' onClick={() => setMenu(!menu)}>
              {basic[inverter].name}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 14 11'
                className='arrow'
              >
                <path d='M6.53525 9.12339L0.192736 2.68245C-0.0642453 2.42547 -0.0642453 2.00992 0.192736 1.75294L0.580941 1.36473C0.837922 1.10775 1.25347 1.10775 1.51045 1.36473L7 6.95818L12.4896 1.3702C12.7465 1.11322 13.1621 1.11322 13.4191 1.3702L13.8073 1.75841C14.0642 2.01539 14.0642 2.43093 13.8073 2.68792L7.46475 9.12886C7.20777 9.38037 6.79223 9.38037 6.53525 9.12339Z' />
              </svg>
            </button>
            <ul className={menu ? 'inv_list' : 'close'}>
              {basic.map((item) => (
                <li key={item.id} value={item.id} className='item'>
                  <button
                    className='item_btn'
                    type='button'
                    onClick={() => handleMenuItemClick(item.id)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='update_time'>
            <span>資料時間</span>
            <span className='date_time'>{dateUpdate()}</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              className='loader'
              onClick={dateUpdate}
            >
              <path d='M15.375 0.25H15.0625C14.8554 0.25 14.6875 0.417906 14.6875 0.625V4.08209C13.3415 1.78941 10.8507 0.25 8 0.25C3.85087 0.25 0.46325 3.51056 0.259688 7.60916C0.249094 7.82222 0.421094 8 0.634406 8H0.947406C1.14594 8 1.31134 7.84534 1.32169 7.64709C1.50491 4.13175 4.40928 1.3125 8 1.3125C10.5894 1.3125 12.8355 2.78366 13.9465 4.9375H10.375C10.1679 4.9375 10 5.10541 10 5.3125V5.625C10 5.83209 10.1679 6 10.375 6H15.375C15.5821 6 15.75 5.83209 15.75 5.625V0.625C15.75 0.417906 15.5821 0.25 15.375 0.25ZM15.3656 8H15.0526C14.8541 8 14.6887 8.15466 14.6783 8.35291C14.495 11.8799 11.5796 14.6875 8 14.6875C5.4185 14.6875 3.1665 13.2203 2.05316 11.0625H5.625C5.83209 11.0625 6 10.8946 6 10.6875V10.375C6 10.1679 5.83209 10 5.625 10H0.625C0.417906 10 0.25 10.1679 0.25 10.375V15.375C0.25 15.5821 0.417906 15.75 0.625 15.75H0.9375C1.14459 15.75 1.3125 15.5821 1.3125 15.375V11.9179C2.65847 14.2106 5.14928 15.75 8 15.75C12.1492 15.75 15.5367 12.4894 15.7403 8.39084C15.7509 8.17778 15.5789 8 15.3656 8Z' />
            </svg>
          </div>
        </header>
        <div className='content'>
          <ul className='table_header'>
            {common.tableHead.map((item) => (
              <li key={item.id} style={item.spacing}>
                {item.name}
                {item.unit && <span className='unit'>{` ${item.unit}`}</span>}
              </li>
            ))}
          </ul>
          <div className='table_body'>
            {digital[inverter].map((item) => (
              <ul style={item.width} key={item.id}>
                {item.data.map((element) => (
                  <li>{element}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default MapOfStation
