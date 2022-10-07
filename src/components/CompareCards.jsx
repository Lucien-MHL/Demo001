import React from 'react'
import styles from '../sass/components/compareCards.scss'

function CompareCards() {
  return (
    <div className={styles.cards_compare}>
      <div className={styles.content_wrap}>
        <div className={styles.cards_content}>
          <div className={styles.content_subtitle}>平均發電量</div>
          <div className={styles.content_summary}>2.54</div>
        </div>
        <div className={styles.cards_right}>
          <div className={styles.cards_icon}>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_251_4701)'>
                <path
                  d='M0 4.625V0.75C0 0.334375 0.334375 0 0.75 0H4.625C4.83125 0 5 0.16875 5 0.375V0.625C5 0.83125 4.83125 1 4.625 1H1V4.625C1 4.83125 0.83125 5 0.625 5H0.375C0.16875 5 0 4.83125 0 4.625ZM9.375 0H13.25C13.6656 0 14 0.334375 14 0.75V4.625C14 4.83125 13.8312 5 13.625 5H13.375C13.1688 5 13 4.83125 13 4.625V1H9.375C9.16875 1 9 0.83125 9 0.625V0.375C9 0.16875 9.16875 0 9.375 0ZM14 9.375V13.25C14 13.6656 13.6656 14 13.25 14H9.375C9.16875 14 9 13.8312 9 13.625V13.375C9 13.1688 9.16875 13 9.375 13H13V9.375C13 9.16875 13.1688 9 13.375 9H13.625C13.8312 9 14 9.16875 14 9.375ZM4.625 14H0.75C0.334375 14 0 13.6656 0 13.25V9.375C0 9.16875 0.16875 9 0.375 9H0.625C0.83125 9 1 9.16875 1 9.375V13H4.625C4.83125 13 5 13.1688 5 13.375V13.625C5 13.8312 4.83125 14 4.625 14Z'
                  fill='black'
                />
              </g>
              <defs>
                <clipPath id='clip0_251_4701'>
                  <rect width='14' height='14' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.summary_unit}>單位 kwh/kWp</div>
        </div>
      </div>
      <div
        style={{
          padding: '0 .25rem',
          margin: '1rem 0'
        }}
      >
        <hr
          style={{
            size: '1px',
            width: '100%',
            border: '1px solid #34237f'
          }}
        />
      </div>
      <div className={styles.cards_average}>
        <div>
          <div className={styles.content_level}>最高</div>
          <div className={styles.content_level}>最低</div>
        </div>

        <div className={styles.cards_station}>
          <div className={styles.station_content}>
            <div className={styles.station_name}>台南北門</div>
            <div className={styles.station_data}>2.74</div>
          </div>

          <div className={styles.station_content}>
            <div className={styles.station_name}>台北中山 </div>
            <div className={styles.station_data}>2.3</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareCards
