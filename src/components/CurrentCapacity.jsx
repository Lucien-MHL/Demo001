import React from 'react'
import CountUp from 'react-countup'
import styles from '../sass/components/singleCapacity.module.scss'

function currentCapacity({ props }) {
  const result = props.dcc.toString().split('.')
  const decimals = result.length !== 1 ? result[1].length : 0

  return (
    <div className={styles.header_bottom}>
      <p>
        <span className={styles.capacity_name}>{props.name}</span>
        裝置容量
      </p>
      <p>
        <CountUp
          end={props.dcc}
          decimals={decimals}
          separator=','
          className={styles.capacity_value}
          duration={1}
          useEasing
        />
        kWp
      </p>
    </div>
  )
}

export default currentCapacity
