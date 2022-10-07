import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styles from '../sass/components/genreStations.module.scss'
import fakeAllStations from '../fakeAPI/fake_station_all'
import { genreStation } from '../fakeAPI/charts_data/genreStation_chart_data'

function GenreStations() {
  let result = 0
  fakeAllStations.forEach((item) => {
    result += item.dcc
    return result
  })
  const { data } = genreStation.series[0]
  return (
    <section className={styles.genre_stations}>
      <div className={styles.chart}>
        <HighchartsReact
          highcharts={Highcharts}
          options={genreStation}
          containerProps={{
            style: {
              height: '100%'
            }
          }}
        />
        <aside className={styles.info}>
          <div className={styles.header}>
            <p className={styles.title}>案場類型</p>
            <ul className={styles.source}>
              <li>{`案場數量 ${fakeAllStations.length}`}</li>
              <li>
                {`設置容量 ${result.toLocaleString('en')} `}
                <span className={styles.small}>kWp</span>
              </li>
            </ul>
          </div>
          <ul className={styles.legend}>
            {data.map((item) => (
              <li className={styles.item}>
                <span
                  className={styles.symbol}
                  style={{ background: `${item.color}` }}
                >
                  {' '}
                </span>
                {item.name}
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <div className={styles.table}>
        <ul className={styles.table_header}>
          <li className={styles.name}>案場名稱</li>
          <li className={styles.type}>類型</li>
          <li className={styles.dcc}>
            設置容量
            <span>kWp</span>
          </li>
          <li className={styles.energy}>
            今日發電量
            <span>kWh</span>
          </li>
        </ul>
        <section className={styles.table_body}>
          {fakeAllStations.map((item) => (
            <ul key={item.id} className={styles.row}>
              <li className={styles.row_name}>{item.name}</li>
              <li className={styles.row_type}>{item.type}</li>
              <li className={styles.row_dcc}>{item.dcc.toLocaleString('en')}</li>
              <li className={styles.row_energy}>
                {item.dailyEnergy.toLocaleString('en')}
              </li>
            </ul>
          ))}
        </section>
      </div>
    </section>
  )
}

export default GenreStations
