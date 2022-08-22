import React from 'react'
import Header from '../components/Header.jsx'
import AllCapacity from '../components/AllCapacity.jsx'
import TimeSwitch from '../components/TimeSwitch.jsx'
// import ExhibitStations from '../components/ExhibitStations.jsx'
// import GenreStations from '../components/GenreStations.jsx'
import DataStations from '../components/DataStations.jsx'
import Footer from '../components/Footer.jsx'
import styles from '../sass/main.module.scss'

function Exhibit() {
  // const result = 'genre'
  const result = 'default'

  return (
    <div className={styles.container}>
      <Header />
      <AllCapacity />
      <TimeSwitch result={result} />
      <div
        className={result === 'genre' ? styles.shrink_hidden : styles.shrink_scroll}
      >
        <DataStations />
        {/* <GenreStations /> */}
        {/* <ExhibitStations /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Exhibit
