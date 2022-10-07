import React, { useState } from 'react'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
// eslint-disable-next-line import/no-extraneous-dependencies
import { zhTW } from 'date-fns/locale'
// eslint-disable-next-line import/no-extraneous-dependencies
import { addDays } from 'date-fns'
import styled from 'styled-components'

import 'react-datepicker/dist/react-datepicker.css'

registerLocale('zh-TW', zhTW)

const Section = styled.section`
  width: max-content;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .btn_group {
    display: flex;
    align-items: center;

    .btn {
      background: transparent;
      border-radius: 50%;
      border: none;
      padding: 0.625rem;
      cursor: pointer;
      font-size: 1.25rem;
      margin-right: 0.25rem;

      &:hover {
        background-color: #000;
        color: #fff;
      }
    }

    .active {
      background-color: #000;
      color: #fff;
    }

    .react-datepicker-wrapper {
      padding-left: 1.375rem;

      .icon {
        width: 21px;
        cursor: pointer;
      }
    }

    .react-datepicker__tab-loop {
      z-index: 3;
    }
  }

  .showDate {
    margin-left: 0.375rem;
    font-size: 1.5rem;
  }
`

function DatePicker() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [unit, setUnit] = useState('day')

  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <Section>
      <div className='btn_group'>
        <button
          type='button'
          className={unit === 'year' ? 'btn active' : 'btn'}
          onClick={(e) => setUnit(e.target.value)}
          value='year'
        >
          年
        </button>
        <button
          type='button'
          className={unit === 'month' ? 'btn active' : 'btn'}
          onClick={(e) => setUnit(e.target.value)}
          value='month'
        >
          月
        </button>
        <button
          type='button'
          className={unit === 'day' ? 'btn active' : 'btn'}
          onClick={(e) => setUnit(e.target.value)}
          value='day'
        >
          日
        </button>
        <button
          type='button'
          className={unit === 'hour' ? 'btn active' : 'btn'}
          onClick={(e) => setUnit(e.target.value)}
          value='hour'
        >
          時
        </button>
        <ReactDatePicker
          locale='zh-TW'
          selectsRange
          customInput={<Input />}
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          maxDate={addDays(new Date(), 0)}
          monthsShown={unit === 'day' || unit === 'hour' ? 2 : 1}
          showMonthYearPicker={unit === 'month'}
          showYearPicker={unit === 'year'}
          dateFormatCalendar='yyyy LLLL'
        />
      </div>
      <ShowDate props={{ startDate, endDate, unit }} />
    </Section>
  )
}

function Input({ onClick }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 14 16'
      className='icon'
      onClick={onClick}
    >
      <path d='M12.5 2H11V0.375C11 0.16875 10.8313 0 10.625 0H10.375C10.1687 0 10 0.16875 10 0.375V2H4V0.375C4 0.16875 3.83125 0 3.625 0H3.375C3.16875 0 3 0.16875 3 0.375V2H1.5C0.671875 2 0 2.67188 0 3.5V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V3.5C14 2.67188 13.3281 2 12.5 2ZM1.5 3H12.5C12.775 3 13 3.225 13 3.5V5H1V3.5C1 3.225 1.225 3 1.5 3ZM12.5 15H1.5C1.225 15 1 14.775 1 14.5V6H13V14.5C13 14.775 12.775 15 12.5 15ZM4.625 10H3.375C3.16875 10 3 9.83125 3 9.625V8.375C3 8.16875 3.16875 8 3.375 8H4.625C4.83125 8 5 8.16875 5 8.375V9.625C5 9.83125 4.83125 10 4.625 10ZM7.625 10H6.375C6.16875 10 6 9.83125 6 9.625V8.375C6 8.16875 6.16875 8 6.375 8H7.625C7.83125 8 8 8.16875 8 8.375V9.625C8 9.83125 7.83125 10 7.625 10ZM10.625 10H9.375C9.16875 10 9 9.83125 9 9.625V8.375C9 8.16875 9.16875 8 9.375 8H10.625C10.8313 8 11 8.16875 11 8.375V9.625C11 9.83125 10.8313 10 10.625 10ZM7.625 13H6.375C6.16875 13 6 12.8313 6 12.625V11.375C6 11.1687 6.16875 11 6.375 11H7.625C7.83125 11 8 11.1687 8 11.375V12.625C8 12.8313 7.83125 13 7.625 13ZM4.625 13H3.375C3.16875 13 3 12.8313 3 12.625V11.375C3 11.1687 3.16875 11 3.375 11H4.625C4.83125 11 5 11.1687 5 11.375V12.625C5 12.8313 4.83125 13 4.625 13ZM10.625 13H9.375C9.16875 13 9 12.8313 9 12.625V11.375C9 11.1687 9.16875 11 9.375 11H10.625C10.8313 11 11 11.1687 11 11.375V12.625C11 12.8313 10.8313 13 10.625 13Z' />
    </svg>
  )
}

function ShowDate({ props }) {
  let format
  switch (props.unit) {
    case 'day':
      format = 'yyyy/MM/dd'
      break
    case 'month':
      format = 'yyyy/MM'
      break
    case 'year':
      format = 'yyyy'
      break
    default:
      format = 'yyyy/MM/dd'
      break
  }
  return (
    <ReactDatePicker
      dateFormat={format}
      selectsRange
      startDate={props.startDate}
      endDate={props.endDate}
      customInput={<ReadOnly />}
    />
  )
}

function ReadOnly({ value }) {
  return <p className='showDate'>{value}</p>
}

export default DatePicker
