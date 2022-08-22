import React from 'react'
import CountUp from 'react-countup'
import PRdata from './styles/PR_data.jsx'
import styles from '../sass/components/calculation.module.scss'
import EnergyAndPrice from './styles/EnergyAndPrice.jsx'

function Calculation({ props }) {
  return (
    <div className={styles.contain}>
      <div className={styles.station_data}>
        <div className={styles.title}>各數據統計</div>
        <ul className={styles.group}>
          {props.solarData.map((item) => (
            <li className={styles.card} key={item.id}>
              <CountUp
                className={styles.value}
                end={item.dailyTotalNum}
                separator=','
                duration={0.5}
                useEasing
              />
              <p className={styles.key}>
                <span className={styles.category}>{item.name}</span>
                <span className={styles.unit}>{item.unit}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.dateAndRate}>
        <PRdata value={props} />
        <ul className={styles.table}>
          <li className={styles.row}>
            <p className={styles.value}>2020/11/24</p>
            <p className={styles.key}>併網日期</p>
          </li>
          <li className={styles.row}>
            <p className={styles.value}>826,120</p>
            <p className={styles.key}>
              併網累積發電量
              <small>(kWh)</small>
            </p>
          </li>
          <li className={styles.row}>
            <p className={styles.value}>4.9930</p>
            <p className={styles.key}>躉售費率</p>
          </li>
        </ul>
      </div>
      <div className={styles.chartAndPhoto}>
        <div className={styles.chart}>
          <EnergyAndPrice />
        </div>
        <div className={styles.box4}> </div>
      </div>
    </div>
  )
}

export default Calculation
