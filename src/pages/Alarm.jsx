import React from 'react'
import styles from '../sass/main.module.scss'
import Header from '../components/Header.jsx'
import AllCapacity from '../components/AllCapacity.jsx'
import Place from '../components/Place.jsx'
import Genre from '../components/Genre.jsx'
import Footer from '../components/Footer.jsx'

function Alarm() {
  return (
    <div className={styles.container}>
      <Header />
      <AllCapacity />
      <section className={styles.sorting}>
        <Place />
        <Genre />
      </section>

      <div className={styles.shrink_hidden}> </div>
      <Footer />
    </div>
  )
}

export default Alarm
