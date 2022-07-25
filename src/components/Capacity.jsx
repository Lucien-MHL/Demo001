import React from 'react'
import styles from '../sass/capacity.module.scss'

function Capacity() {
  return (
    <div className={styles.container}>
      <p className={styles.headerTitle}>總裝置容量</p>
      <p>
        4,318.94
        <small> kWp</small>
      </p>
    </div>
  )
}

export default Capacity
