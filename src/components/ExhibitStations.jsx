import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../sass/components/exhibitStations.module.scss'
import fakeAllStations from '../fakeAPI/fake_station_all'

function ExhibitStations() {
  return (
    <section className={styles.stations_group}>
      {fakeAllStations.map((item) => (
        <Link
          to={`current_station?id=${item.id}`}
          className={styles.station}
          key={item.id}
        >
          <figure className={styles.station_content}>
            <img className={styles.station_pic} src={item.photo} alt='pic' />
            <figcaption className={styles.station_title}>
              <h4 className={styles.title_name}>{item.name}</h4>
              <p className={styles.title_type}>{item.type}</p>
            </figcaption>
          </figure>
        </Link>
      ))}
    </section>
  )
}

export default ExhibitStations
