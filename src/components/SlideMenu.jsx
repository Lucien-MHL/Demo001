/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import styles from '../sass/components/slideMenu.module.scss'
import Filter from './Filter.jsx'

function SlideMenu() {
  const [Toggled, setToggled] = useState(false)
  // const [select, setSelect] = useState('')

  // const isCheckAll = checkedItems.length === ITEMS.length
  return (
    <div className={Toggled ? styles.slideClose : styles.slideOpen}>
      <div className={styles.edge_left}>
        <div className={styles.title_wrap}>
          <span className={styles.title_choice}>選擇案場</span>
          <Filter />
        </div>
        <div className={styles.mid_wrap}>
          <div className={styles.mid_content}>
            <div className={styles.type_title}>
              <label>
                <input type='checkbox' className={styles.content_item} />
                <span className={styles.item_text}>屋頂型</span>
              </label>
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
            </div>
            <div className={styles.content_group}>
              <label>
                <input type='checkbox' className={styles.content_item} />
                <span className={styles.item_text}>立法院</span>
              </label>

              <label>
                <input type='checkbox' className={styles.content_item} />
                <span className={styles.item_text}>伸評鋼鐵</span>
              </label>

              <label>
                <input type='checkbox' className={styles.content_item} />
                <span className={styles.item_text}>前進國小</span>
              </label>

              <label>
                <input type='checkbox' className={styles.content_item} />
                <span className={styles.item_text}>大肚國小</span>
              </label>

              <label>
                <input type='checkbox' className={styles.content_item} />
                <span className={styles.item_text}>前進國小</span>
              </label>

              <label>
                <input type='checkbox' className={styles.content_item} />
                <span className={styles.item_text}>立法院</span>
              </label>

              <label>
                <input type='checkbox' className={styles.content_item} />
                <span className={styles.item_text}>伸評鋼鐵</span>
              </label>

              <label>
                <input type='checkbox' className={styles.content_item} />
                <span className={styles.item_text}>蘆竹益睿</span>
              </label>

              <label>
                <input type='checkbox' className={styles.content_item} />
                <span className={styles.item_text}>京揚國際ABC棟</span>
              </label>

              <label>
                <input type='checkbox' className={styles.content_item} />
                <span className={styles.item_text}>伸評鋼鐵</span>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.btm_zone}>
          <button type='button' className={styles.zone_select}>
            全選
          </button>
          <button type='button' className={styles.zone_select}>
            清除
          </button>
        </div>
      </div>
      <button
        type='button'
        className={Toggled ? styles.edge_btn_close : styles.edge_btn}
        onClick={() => setToggled(!Toggled)}
      >
        <svg
          className={styles.slide_arrow}
          width='10'
          height='22'
          viewBox='0 0 10 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.31584 19.623L9.59205 19.3313C9.7751 19.1379 9.7751 18.8243 9.59205 18.6309L1.95561 10.5627L9.59205 2.49453C9.7751 2.30114 9.7751 1.98756 9.59205 1.79413L9.31584 1.50235C9.13279 1.30895 8.836 1.30895 8.65295 1.50235L0.40877 10.2125C0.225723 10.4059 0.225723 10.7195 0.40877 10.9129L8.65295 19.6231C8.836 19.8165 9.13279 19.8165 9.31584 19.623Z'
            fill='#CBCACA'
          />
        </svg>
      </button>
    </div>
  )
}

export default SlideMenu
