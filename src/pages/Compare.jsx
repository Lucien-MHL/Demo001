import React, { useRef } from 'react'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import styles from '../sass/main.module.scss'

function Compare() {
  const render = useRef(false)
  return (
    <div className={styles.container}>
      <Header isRender={render} />

      <div className={styles.shrink_hidden}> </div>
      <Footer />
    </div>
  )
}

export default Compare
