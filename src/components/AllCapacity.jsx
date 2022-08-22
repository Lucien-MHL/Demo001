import React from 'react'
import CountUp from 'react-countup'
import styles from '../sass/components/allCapacity.module.scss'
import fakeAllStations from '../fakeAPI/fake_station_all'

function AllCapacity() {
  let result = 0
  fakeAllStations.forEach((item) => {
    result += item.dcc
    return result
  })

  return (
    <div className={styles.header_bottom}>
      <p>總裝置容量</p>
      <p>
        <CountUp
          className={styles.capacity_value}
          end={result}
          decimals={3}
          separator=','
          useEasing
          duration={0.5}
        />
        kWp
      </p>
    </div>
  )
}

export default AllCapacity
