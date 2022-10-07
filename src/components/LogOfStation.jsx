import React, { useState } from 'react'
import styled from 'styled-components'
import { INV16, ErrorCard } from '../fakeAPI/fake_LogOfStation_data'
import DatePicker from './styles/DatePicker.jsx'
import Download from './styles/Download.jsx'
import HighLowCompare from './styles/HighLowCompare.jsx'

const Header = styled.header`
  width: 100%;
  height: 20%;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;

  .filter {
    height: 100%;
    padding-top: 2.627%;
    padding-left: 2px;
    width: 523px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .category {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .setting {
    height: 100%;
    width: 358px;
    padding-top: 1.913%;
    padding-right: 1.75rem;
    display: flex;
    justify-content: space-between;
  }
`

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  /* background-color: #e2d3d3; */

  .contain {
    width: 100%;
    height: 80%;
    display: flex;

    .article,
    .cardList {
      border-width: 1px 0px 1px 1px;
      border-style: solid;
      border-color: rgba(91, 91, 91, 0.9);
      border-radius: 8px 0px 0px 8px;
      height: 100%;

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
    }

    .cardList {
      width: calc(33% - 1.375rem);
      margin-right: 1.375rem;
      overflow-y: scroll;
    }

    .article {
      width: 34%;
      overflow-y: scroll;
      padding: 1.5rem;
      text-align: justify;

      .intro,
      .error_name,
      .cause,
      .advice {
        width: 100%;
      }

      .error_name,
      .cause {
        margin-bottom: 2.75rem;
      }

      .error_name,
      .cause,
      .advice {
        h3 {
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.05em;
          margin-bottom: 0.875rem;
        }

        p {
          line-height: 19px;
          letter-spacing: 0.05em;
          margin-left: 1.125rem;
        }

        ul {
          margin-left: calc(1.125rem + 18px);

          li {
            list-style: disc;
            line-height: 19px;
            letter-spacing: 0.05em;
          }
        }
      }

      .intro {
        margin-bottom: 1.75rem;

        .card_header {
          margin-bottom: 3.25rem;
          letter-spacing: 0.05em;
        }

        .card_body {
          width: 406px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .info {
            width: max-content;
            padding-right: 32px;
            padding-left: 0.25rem;
            height: 45px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;

            &:nth-child(2) {
              padding-right: 22px;
            }
            &:nth-child(3) {
              padding-right: 52px;
              margin-top: 1.5rem;
            }

            &::before {
              content: '';
              width: 100%;
              height: 1px;
              background-color: rgba(60, 60, 60, 0.9);
              position: absolute;
              top: 0;
              bottom: 0;
              margin: auto;
              left: 0;
            }

            .value {
              font-weight: 500;
              font-size: 14px;
              line-height: 16px;
              letter-spacing: 0.05em;
            }
            .key {
              font-size: 12px;
              line-height: 14px;
              letter-spacing: 0.05em;
            }
          }
        }
      }
    }

    .chart {
      width: 33%;
      display: flex;
      align-items: flex-end;
    }
  }
`

const Selector = styled.div`
  width: max-content;
  font-size: 1.25rem;

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

const StatusSelector = styled(Selector)`
  font-size: 0.875rem;

  button {
    font-size: 0.875rem;
    line-height: 20px;

    .arrow {
      height: 20px;
      padding: 0.34375rem;
      margin-left: 1rem;
    }
  }
`

const GenreSelector = styled(StatusSelector)`
  button {
    padding-left: 1.5rem;

    .arrow {
      height: 20px;
      padding: 0.34375rem;
      margin-left: 1.5rem;
    }
  }
`

const Card = styled.button`
  width: 96%;
  height: 129px;
  padding: 1rem 1.5rem 0.5rem 1.25rem;
  margin: 2%;
  border: none;
  cursor: pointer;
  background: transparent;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000000;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.55);
  }

  .detail {
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    pointer-events: none;

    .name {
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.05em;
    }

    .content {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.05em;
      color: #3c3c3c;

      li {
        margin-bottom: 0.25rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  &.active {
    background-color: #fff;
    border: 1px solid rgba(120, 120, 120, 0.9);
    border-bottom: 4px solid #000000;
    border-radius: 5px 5px 0 0px;

    .detail {
      .content {
        font-weight: 600;
      }
    }

    .status {
      .status_name {
        font-weight: 600;
      }
    }
  }

  .status {
    pointer-events: none;
    height: 100%;
    display: flex;
    align-items: flex-end;

    .msg {
      position: absolute;
      height: min-content;
      top: 0;
      right: 1.5rem;
      bottom: 0;
      margin: auto;

      .status_name {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.075rem;
        width: 50.406px;
      }

      .small {
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.05em;
        color: #787878;
      }
    }
  }
`

function LogOfStation() {
  const [active, setActive] = useState('0')

  return (
    <Section>
      <Header>
        <div className='filter'>
          <Selector>
            變流器
            <button type='button'>
              INV 016
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 14 11'
                className='arrow'
              >
                <path d='M6.53525 9.12339L0.192736 2.68245C-0.0642453 2.42547 -0.0642453 2.00992 0.192736 1.75294L0.580941 1.36473C0.837922 1.10775 1.25347 1.10775 1.51045 1.36473L7 6.95818L12.4896 1.3702C12.7465 1.11322 13.1621 1.11322 13.4191 1.3702L13.8073 1.75841C14.0642 2.01539 14.0642 2.43093 13.8073 2.68792L7.46475 9.12886C7.20777 9.38037 6.79223 9.38037 6.53525 9.12339Z' />
              </svg>
            </button>
          </Selector>
          <section className='category'>
            <StatusSelector>
              狀態
              <button type='button'>
                進行中
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 14 11'
                  className='arrow'
                >
                  <path d='M6.53525 9.12339L0.192736 2.68245C-0.0642453 2.42547 -0.0642453 2.00992 0.192736 1.75294L0.580941 1.36473C0.837922 1.10775 1.25347 1.10775 1.51045 1.36473L7 6.95818L12.4896 1.3702C12.7465 1.11322 13.1621 1.11322 13.4191 1.3702L13.8073 1.75841C14.0642 2.01539 14.0642 2.43093 13.8073 2.68792L7.46475 9.12886C7.20777 9.38037 6.79223 9.38037 6.53525 9.12339Z' />
                </svg>
              </button>
            </StatusSelector>
            <GenreSelector>
              異常分類
              <button type='button'>
                全部
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 14 11'
                  className='arrow'
                >
                  <path d='M6.53525 9.12339L0.192736 2.68245C-0.0642453 2.42547 -0.0642453 2.00992 0.192736 1.75294L0.580941 1.36473C0.837922 1.10775 1.25347 1.10775 1.51045 1.36473L7 6.95818L12.4896 1.3702C12.7465 1.11322 13.1621 1.11322 13.4191 1.3702L13.8073 1.75841C14.0642 2.01539 14.0642 2.43093 13.8073 2.68792L7.46475 9.12886C7.20777 9.38037 6.79223 9.38037 6.53525 9.12339Z' />
                </svg>
              </button>
            </GenreSelector>
          </section>
        </div>
        <div className='setting'>
          <DatePicker />
          <Download />
        </div>
      </Header>
      <div className='contain'>
        <div className='cardList'>
          {INV16.map((item) => (
            <Card
              key={item.id}
              className={active === item.id ? 'active' : ''}
              onClick={(e) => setActive(e.target.value)}
              value={item.id}
            >
              <div className='detail'>
                <p className='name'>{item.name}</p>
                <ul className='content'>
                  <li>{item.time}</li>
                  <li>{item.model}</li>
                  <li>{item.OEM}</li>
                </ul>
              </div>
              <div className='status'>
                <div className='msg'>
                  <p className='status_name'>{item.status}</p>
                  {item.status.length < 3 && <p className='small'>異常狀態</p>}
                </div>
                {item.errorCode && (
                  <div className='errorCode'>{`異常代碼 ${item.errorCode}`}</div>
                )}
              </div>
            </Card>
          ))}
        </div>
        <div className='article'>
          <div className='intro'>
            <div className='card_header'>{ErrorCard[active].name}</div>
            <ul className='card_body'>
              <li className='info'>
                <p className='value'>{ErrorCard[active].model}</p>
                <p className='key'>設備型號</p>
              </li>
              <li className='info'>
                <p className='value'>{ErrorCard[active].installation}</p>
                <p className='key'>安裝日期</p>
              </li>
              <li className='info'>
                <p className='value'>{ErrorCard[active].SN}</p>
                <p className='key'>設備序號</p>
              </li>
            </ul>
          </div>
          <div className='error_name'>
            <h3>異常名稱</h3>
            <p>{ErrorCard[active].errorName}</p>
          </div>
          <div className='cause'>
            <h3>造成原因</h3>
            {ErrorCard[active].cause.length !== 0 ? (
              <ul>
                {ErrorCard[active].cause.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            ) : (
              <p>原廠技術文件無說明</p>
            )}
          </div>
          <div className='advice'>
            <h3>處理建議</h3>
            {ErrorCard[active].advice.length !== 0 ? (
              <ul>
                {ErrorCard[active].advice.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            ) : (
              <p>原廠技術文件無說明</p>
            )}
          </div>
        </div>
        <div className='chart'>
          <HighLowCompare />
        </div>
      </div>
    </Section>
  )
}

export default LogOfStation
