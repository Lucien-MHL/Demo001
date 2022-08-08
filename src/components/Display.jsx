import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../sass/display.module.scss'
import Search from './Search.jsx'
import { dailyOrYearly } from '../features/Stations'

function Display() {
  const dispatch = useDispatch()
  const solarSource = useSelector((state) => state.stations.solarSource)

  return (
    <div className={styles.display}>
      <ul className={styles.dailyOrYear}>
        <li onClick={() => dispatch(dailyOrYearly('daily'))}>今日</li>
        <li onClick={() => dispatch(dailyOrYearly('yearly'))}>年度</li>
      </ul>
      <ul className={styles.cards}>
        <li>{solarSource.energy}</li>
        <li>{solarSource.electricitySold}</li>
        <li>{solarSource.oilEquivalent}</li>
        <li>{solarSource.co2Reduction}</li>
        <li>{solarSource.treesPlanted}</li>
      </ul>
      <Search />
    </div>
  )
}

export default Display
