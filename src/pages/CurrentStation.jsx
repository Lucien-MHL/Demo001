import React, { useRef, useState } from 'react'
import Header from '../components/Header.jsx'
import CurrentCapacity from '../components/CurrentCapacity.jsx'
import styles from '../sass/main.module.scss'
import CurrentStationNav from '../components/CurrentStationNav.jsx'
import Calculation from '../components/Calculation.jsx'
import Footer from '../components/Footer.jsx'
import fakeSingleStation from '../fakeAPI/fake_station_single.js'
import { obj } from '../reducer/a'
import MapOfStation from '../components/MapOfStation.jsx'
import DeviceOfStation from '../components/DeviceOfStation.jsx'
import LogOfStation from '../components/LogOfStation.jsx'
import DirtyIndicator from '../components/DirtyIndicator.jsx'

function CurrentStation() {
  const { SingleStationSwitch } = obj
  const [isActive, setIsActive] = useState('E01')
  const render = useRef(false)
  const url = new URL(window.location.href)
  const parameter = url.searchParams.get('id')
  const data = fakeSingleStation.find((item) => item.id.toString() === parameter)

  return (
    <div className={styles.container}>
      <Header isRender={render} />
      <CurrentCapacity props={data} />
      <SingleStationSwitch.Provider
        value={{ active: isActive, setActive: setIsActive }}
      >
        <CurrentStationNav />
        <div className={styles.shrink_hidden}>
          {isActive === 'E01' ? (
            <Calculation props={data} />
          ) : isActive === 'E02' ? (
            <MapOfStation />
          ) : isActive === 'E03' ? (
            <DeviceOfStation />
          ) : isActive === 'E04' ? (
            <LogOfStation />
          ) : (
            <DirtyIndicator />
          )}
        </div>
      </SingleStationSwitch.Provider>
      <Footer />
    </div>
  )
}

export default CurrentStation
