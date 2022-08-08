import React from 'react'
import Header from '../components/Header.jsx'
import Capacity from '../components/Capacity.jsx'
import styles from '../sass/exhibit.module.scss'

function CurrentStation() {
  return (
    <div className={styles.container}>
      <Header />
      <Capacity />
    </div>
  )
}

export default CurrentStation
