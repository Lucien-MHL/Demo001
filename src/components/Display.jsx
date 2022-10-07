import React, { useContext, useEffect } from 'react'
import styles from '../sass/components/display.module.scss'
import { obj } from '../reducer/a'

function Display() {
  const { DisplaySwitch } = obj
  // eslint-disable-next-line object-curly-newline
  const { display, setDisplay, event, setEvent } = useContext(DisplaySwitch)

  useEffect(() => {
    if (!event) return
    setEvent(!event)
  }, [display])

  return (
    <div className={styles.display}>
      <button type='button' className={styles.btn} onClick={() => setEvent(!event)}>
        <span className={styles.text}>顯示</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          id='drop'
          viewBox='0 0 24 24'
          width='15'
          height='15'
          className={styles.icon}
        >
          <path d='M12,17.17a5,5,0,0,1-3.54-1.46L.29,7.54A1,1,0,0,1,1.71,6.12l8.17,8.17a3,3,0,0,0,4.24,0l8.17-8.17a1,1,0,1,1,1.42,1.42l-8.17,8.17A5,5,0,0,1,12,17.17Z' />
        </svg>
      </button>
      <ul className={event ? styles.appear : styles.menu}>
        <li className={styles.item}>
          <button type='button' onClick={() => setDisplay('data')}>
            數據顯示
          </button>
        </li>
        <li className={styles.item}>
          <button type='button' onClick={() => setDisplay('genre')}>
            類型顯示
          </button>
        </li>
        <li className={styles.item}>
          <button type='button' onClick={() => setDisplay('default')}>
            預設
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Display
