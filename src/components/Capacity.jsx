import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../sass/capacity.module.scss'

function Capacity() {
  const dcc = useSelector((state) => state.capacity.view.dcc)

  return (
    <div>
      <div className={styles.capacity}>
        <p>總裝置容量</p>
        <p>
          {dcc}
          <small> kWp</small>
        </p>
      </div>
    </div>
  )
}

export default Capacity
