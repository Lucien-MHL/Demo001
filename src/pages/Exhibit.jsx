import React, { useState, useMemo } from 'react'
import Header from '../components/Header.jsx'
import AllCapacity from '../components/AllCapacity.jsx'
import TimeSwitch from '../components/TimeSwitch.jsx'
import ExhibitStations from '../components/ExhibitStations.jsx'
import GenreStations from '../components/GenreStations.jsx'
import DataStations from '../components/DataStations.jsx'
import Footer from '../components/Footer.jsx'
import styles from '../sass/main.module.scss'
import { obj } from '../reducer/a'

function Exhibit() {
  const { DisplaySwitch } = obj
  const [display, setDisplay] = useState('default')
  const [event, setEvent] = useState(false)

  const state = useMemo(
    () => ({
      display,
      setDisplay,
      event,
      setEvent
    }),
    [display, event]
  )

  let component
  switch (display) {
    case 'default': {
      component = <ExhibitStations />
      break
    }
    case 'genre': {
      component = <GenreStations />
      break
    }
    case 'data': {
      component = <DataStations />
      break
    }
    default: {
      break
    }
  }

  return (
    <DisplaySwitch.Provider value={state}>
      <div className={styles.container}>
        <section className={styles.component_container}> </section>
        <Header />
        <AllCapacity />
        <TimeSwitch result={display} />
        <div
          className={
            display === 'genre' ? styles.shrink_hidden : styles.shrink_scroll
          }
        >
          {component}
        </div>
        <Footer />
      </div>
    </DisplaySwitch.Provider>
  )
}

export default Exhibit
