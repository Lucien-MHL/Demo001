import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../sass/header.module.scss'
import { logoutBtn } from '../features/Header/index'

function Header() {
  const dispatch = useDispatch()
  const user = JSON.parse(window.sessionStorage.getItem('user'))

  return (
    <div className={styles.header}>
      <ul className={styles.userList}>
        <li className={styles.text}>繁體中文</li>
        <li className={styles.text}>
          {`${user.name} `}
          <Link
            onClick={(e) => {
              e.preventDefault()
              dispatch(logoutBtn())
            }}
            to='/'
          >
            登出
          </Link>
        </li>
      </ul>
      <ul className={styles.menu}>
        {user.permission.map((item) => (
          <li key={item.id}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header
