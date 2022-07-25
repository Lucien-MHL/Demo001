import React from 'react'
import styles from '../sass/header.module.scss'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.userList}>
          <li className={styles.text}>繁體中文</li>
          <li className={styles.text}>鼎日能源科技股份有限公司 登出</li>
        </ul>
        <ul className={styles.menu}>
          <li>
            <a href='/'>案場展示</a>
          </li>
          <li>
            <a href='/'>檢視</a>
          </li>
          <li>
            <a href='/'>報告</a>
          </li>
          <li>
            <a href='/'>報告</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
