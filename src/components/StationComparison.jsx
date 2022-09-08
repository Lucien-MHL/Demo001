import React from 'react'
import styles from '../sass/components/stationComparison.module.scss'
import CompareCards from './CompareCards.jsx'
import Stationbar from './styles/Station_bar.jsx'
import StationLineChart from './styles/Station_lineChart.jsx'
import SlideMenu from './SlideMenu.jsx'

function StationComparison() {
  return (
    <section className={styles.whole_sec}>
      <SlideMenu />
      <aside className={styles.barchart_container}>
        <p className={styles.chart_title}>平均發電量</p>
        <div className={styles.chart_wrap}>
          <Stationbar />
        </div>
      </aside>
      <section className={styles.right_container}>
        <div className={styles.cards_wrap}>
          <CompareCards />
          <CompareCards />
          <div className={styles.calendar}> </div>
        </div>
        <div className={styles.linechart_container}>
          <StationLineChart className={styles.lineChart} />
        </div>
      </section>
    </section>
  )
}

export default StationComparison
