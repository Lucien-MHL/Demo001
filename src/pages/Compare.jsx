import React from 'react'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import styles from '../sass/main.module.scss'

function Compare() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.shrink_hidden}> </div>
      <Footer />
    </div>
  )
}

export default Compare
