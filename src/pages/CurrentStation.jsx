import React, { useRef, useState, useMemo } from 'react'
import Header from '../components/Header.jsx'
import CurrentCapacity from '../components/CurrentCapacity.jsx'
import styles from '../sass/main.module.scss'
import CurrentStationNav from '../components/CurrentStationNav.jsx'
import Footer from '../components/Footer.jsx'
import fakeSingleStation from '../fakeAPI/fake_station_single.js'
import { obj } from '../reducer/a'
import Calculation from '../components/Calculation.jsx'
import MapOfStation from '../components/MapOfStation.jsx'
import DeviceOfStation from '../components/DeviceOfStation.jsx'
import LogOfStation from '../components/LogOfStation.jsx'

function CurrentStation() {
  const { SingleStationSwitch } = obj
  const [isActive, setIsActive] = useState('E01')
  const render = useRef(false)
  const url = new URL(window.location.href)
  const parameter = url.searchParams.get('id')
  const data = fakeSingleStation.find((item) => item.id.toString() === parameter)

  const active = useMemo(() => ({ isActive, setIsActive }), [isActive])

  let state

  switch (isActive) {
    case 'E01': {
      state = <Calculation props={data} />
      break
    }
    case 'E02': {
      state = <MapOfStation />
      break
    }
    case 'E03': {
      state = <DeviceOfStation />
      break
    }
    case 'E04': {
      state = <LogOfStation />
      break
    }
    default: {
      break
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.current_container}> </section>
      <SingleStationSwitch.Provider value={active}>
        <Header isRender={render} />
        <CurrentCapacity props={data} />
        <CurrentStationNav />
        <div className={styles.shrink_hidden}>{state}</div>
        <Footer />
      </SingleStationSwitch.Provider>
    </div>
  )
}

export default CurrentStation
