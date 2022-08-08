import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../components/Header.jsx'
import Capacity from '../components/Capacity.jsx'
import Display from '../components/Display.jsx'
import Stations from '../components/Stations.jsx'
import styles from '../sass/exhibit.module.scss'
import { loadingData } from '../features/Exhibit/index'

function Exhibit() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadingData())
  })

  return (
    <div className={styles.backImg}>
      <div className={styles.container}>
        <Header />
        <Capacity />
        <Display />
        <Stations />
      </div>
    </div>
  )
}

export default Exhibit
