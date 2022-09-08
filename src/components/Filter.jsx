import React from 'react'
import styles from '../sass/general.module.scss'

function Filter() {
  return (
    <button type='button' className={styles.filter_btn}>
      <span className={styles.filter_fontz}>分類</span>
      <svg
        width='14'
        height='10.5'
        viewBox='0 0 14 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={styles.filter_icon}
      >
        <path
          d='M6.53525 10.0886L0.192736 2.96627C-0.0642453 2.6821 -0.0642453 2.22259 0.192736 1.93842L0.580941 1.50915C0.837922 1.22498 1.25347 1.22498 1.51045 1.50915L7 7.69434L12.4896 1.51519C12.7465 1.23102 13.1621 1.23102 13.4191 1.51519L13.8073 1.94447C14.0642 2.22864 14.0642 2.68814 13.8073 2.97231L7.46475 10.0947C7.20777 10.3728 6.79223 10.3728 6.53525 10.0886Z'
          fill='black'
        />
      </svg>
    </button>
  )
}

export default Filter
