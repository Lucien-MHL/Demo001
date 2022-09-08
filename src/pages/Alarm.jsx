import React from 'react'
import styles from '../sass/main.module.scss'
import Header from '../components/Header.jsx'
import AllCapacity from '../components/AllCapacity.jsx'
import Place from '../components/Place.jsx'
import Genre from '../components/Genre.jsx'
import Footer from '../components/Footer.jsx'

import { allStationkWp } from '../fakeAPI/allStation_monitoring'

import PromptMonitoring from '../components/PromptMonitoring.jsx'
import ExceptionSmileFace from '../components/ExceptionSmileFace.jsx'

function Alarm() {
  const exceptionData = allStationkWp.filter(
    (item) => item.warningColor[0].key !== '0'
  )
  const hasData = exceptionData.length !== 0

  return (
    <div className={styles.container}>
      <Header />
      <AllCapacity />
      <section className={styles.sorting}>
        <Place />
        <Genre />
      </section>

      <div className={hasData ? styles.shrink_scroll : styles.shrink_hidden}>
        {hasData ? <PromptMonitoring warningState /> : <ExceptionSmileFace />}
      </div>
      <Footer />
    </div>
  )
}

export default Alarm
