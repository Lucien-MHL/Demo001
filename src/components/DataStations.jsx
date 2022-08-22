import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../sass/components/dataStations.module.scss'
import fakeAllStations from '../fakeAPI/fake_station_all'
import ProgressBar from './styles/Progress_bar.jsx'

function DataStations() {
  return (
    <section className={styles.card_group}>
      {fakeAllStations.map((item) => (
        <Link
          to={`current_station?id=${item.id}`}
          className={styles.card}
          key={item.id}
        >
          <ul className={styles.card_header}>
            <li className={styles.first_line}>
              <span className={styles.value_name}>年發電量</span>
              <span className={styles.name}>{item.name}</span>
            </li>
            <li className={styles.second_line}>
              <span className={styles.value}>
                {item.YearlyEnergy.toLocaleString('en')}
                <small className={styles.unit}>kWp</small>
              </span>
              <span className={styles.type}>{item.type}</span>
            </li>
          </ul>
          <div className={styles.card_body}>
            <ProgressBar progress={item.PR} />
            <ul className={styles.content}>
              <li className={styles.list}>
                <p className={styles.list_value}>{item.dcc.toLocaleString('en')}</p>
                <p className={styles.list_name}>
                  設置容量
                  <small className={styles.list_unit}>kWp</small>
                </p>
              </li>
              <li className={styles.list}>
                <p className={styles.list_value}>
                  {item.dailyEnergy.toLocaleString('en')}
                </p>
                <p className={styles.list_name}>
                  日發電量
                  <small className={styles.list_unit}>kWh</small>
                </p>
              </li>
            </ul>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default DataStations
