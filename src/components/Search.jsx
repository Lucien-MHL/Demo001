import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../sass/search.module.scss'
import { valueFilter } from '../features/Filter/index'

function Search() {
  const dispatch = useDispatch()
  const filter = JSON.parse(window.sessionStorage.getItem('filter'))
  const data = useRef('')

  return (
    <div className={styles.filterBox}>
      <input type='text' placeholder='🍳 關鍵字搜尋' />
      <ul>
        <li> </li>
        <li>
          <select
            name='list'
            ref={data}
            onChange={() => {
              dispatch(valueFilter(data.current.value))
            }}
          >
            <option value='all'>全部</option>
            <optgroup label='依類型顯示'>
              {filter.type.map((item) => (
                <option key={item.id} value={item.id}>{`${item.name}`}</option>
              ))}
            </optgroup>
            <optgroup label='依地區顯示'>
              {filter.region.map((item) => (
                <option key={item.id} value={item.id}>{`${item.name}`}</option>
              ))}
            </optgroup>
            <optgroup label='自定義'>
              {filter.customsGroup.map((item) => (
                <option key={item.id} value={item.id}>{`${item.name}`}</option>
              ))}
            </optgroup>
          </select>
        </li>
      </ul>
    </div>
  )
}

export default Search
