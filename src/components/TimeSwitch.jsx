import React, { useState } from 'react'
import CountUp from 'react-countup'
import styles from '../sass/components/timeSwitch.module.scss'
import Display from './Display.jsx'
import Genre from './Genre.jsx'
import Place from './Place.jsx'
import { solarData } from '../fakeAPI/fake_station_all'

function TimeSwitch({ result }) {
  const [time, setTime] = useState('daily')

  function handleTimeRange(str) {
    setTime(str)
  }

  return (
    <div className={styles.time_sorting}>
      <ul className={styles.btn_group}>
        <li className={styles.btn}>
          <button
            type='button'
            onClick={() => handleTimeRange('daily')}
            className={time === 'daily' ? styles.active : ''}
          >
            今日
          </button>
        </li>
        <li className={styles.btn}>
          <button
            type='button'
            onClick={() => handleTimeRange('yearly')}
            className={time === 'yearly' ? styles.active : ''}
          >
            年度
          </button>
        </li>
      </ul>
      <div className={styles.contain}>
        <ul className={styles.card_group}>
          {solarData.map((item) => (
            <li className={styles.card} key={item.id}>
              <p>
                <CountUp
                  className={styles.daily_value}
                  end={time === 'daily' ? item.dailyTotalNum : item.yearlyTotalNum}
                  separator=','
                  duration={0.5}
                  useEasing
                />
              </p>
              {time === 'daily' ? (
                <p className={styles.key}>
                  <span className={styles.daily_category}>{item.name}</span>
                  <span className={styles.daily_unit}>{item.unit}</span>
                </p>
              ) : (
                <p className={styles.key}>
                  <span className={styles.yearly_category}>{item.name}</span>
                  <span className={styles.yearly_unit}>{item.unit}</span>
                </p>
              )}
            </li>
          ))}
        </ul>
        <section className={styles.sorting}>
          {result === 'default' && <Place />}
          <Display />
          <Genre />
        </section>
      </div>
    </div>
  )
}

export default TimeSwitch
