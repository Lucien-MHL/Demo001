import React from 'react'
import { Link } from 'react-router-dom'
import { allStationkWp } from '../fakeAPI/allStation_monitoring'
import { monitoringChart } from '../fakeAPI/charts_data/monitoring_chart_data'

import CardChart from './styles/Card_chart.jsx'
import styles from '../sass/components/monitoringCard.module.scss'

function PromptMonitoring({ warningState }) {
  let key = allStationkWp.filter((item) => item.warningColor[0].key === '0')

  if (warningState === true) {
    key = allStationkWp.filter((item) => item.warningColor[0].key !== '0')
  }

  return (
    <section className={styles.stations_group}>
      {key.map((item) => {
        const fill = item.warningColor.map((color) => color.value)
        const monitorData = monitoringChart.find((element) => element.id === item.id)
        return (
          <Link
            className={styles.card_container}
            to={`/current_station?id=${item.id}`}
            key={item.id}
          >
            <div className={styles.card_wrap}>
              <ul className={styles.card_content}>
                <li className={styles.card_list__small}>
                  <span>
                    PR
                    <small>%</small>
                  </span>
                  <span>{item.PR}</span>
                </li>
                <li className={styles.card_list__small}>
                  <span>DMY</span>
                  <span>{item.DMY}</span>
                </li>
                <li className={styles.card_list__small}>
                  <span>中斷</span>
                  <span>{item.brokenAmt}</span>
                </li>
              </ul>

              <div className={styles.card_name}>
                <span className={styles.warningSign}>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16 0C7.16406 0 0 7.16664 0 16C0 24.8385 7.16406 32 16 32C24.8359 32 32 24.8385 32 16C32 7.16664 24.8359 0 16 0ZM15.2587 7.74194H16.7412C17.1814 7.74194 17.5331 8.10852 17.5148 8.54839L17.289 13.9677L17.0632 19.3871C17.0459 19.8018 16.7047 20.129 16.2896 20.129H15.7103C15.2953 20.129 14.9541 19.8017 14.9368 19.3871L14.711 13.9677L14.4852 8.54839C14.4669 8.10852 14.8185 7.74194 15.2587 7.74194Z'
                      fill={fill}
                    />
                    <path
                      d='M14.1935 23.2258C14.1935 22.2281 15.0023 21.4193 16 21.4193C16.9977 21.4193 17.8064 22.2281 17.8064 23.2258C17.8064 24.2234 16.9977 25.0322 16 25.0322C15.0023 25.0322 14.1935 24.2234 14.1935 23.2258Z'
                      fill='white'
                    />
                  </svg>
                </span>
                <span className={styles.card_title}>{item.name}</span>
                <span className={styles.card_subT}>
                  {item.dcc}
                  <small>kWp</small>
                </span>
              </div>
            </div>
            <div className={styles.card_btm}>
              <CardChart data={monitorData} />
            </div>
          </Link>
        )
      })}
    </section>
  )
}

export default PromptMonitoring
