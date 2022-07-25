import React from 'react'
import styles from '../sass/display.module.scss'

function Display() {
  return (
    <div className={styles.container}>
      <ul className={styles.dailyOrYear}>
        <li>今日</li>
        <li>年度</li>
      </ul>
    </div>
  )
}

export default Display
