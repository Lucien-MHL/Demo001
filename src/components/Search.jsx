import React from 'react'
import styles from '../sass/components/search.module.scss'

function Search() {
  return (
    <div className={styles.search_component}>
      <button className={styles.magnifier} type='button'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <g id='_01_align_center' data-name='01 align center'>
            <path d='M24,22.586l-6.262-6.262a10.016,10.016,0,1,0-1.414,1.414L22.586,24ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z' />
          </g>
        </svg>
      </button>
      <input className={styles.searchBar} type='search' placeholder='案場搜尋...' />
    </div>
  )
}

export default Search
