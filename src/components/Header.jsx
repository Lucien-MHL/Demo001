import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Search from './Search.jsx'
import styles from '../sass/components/header.module.scss'
import permissionAll from '../fakeAPI/fake_permission_all.js'

function Header({ isRender }) {
  return (
    <div className={styles.header}>
      <ul className={styles.header_top}>
        <li className={styles.lang}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='global'
            className={styles.global}
            viewBox='0 0 24 24'
            width='21'
            height='21.68'
          >
            <path d='M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048A10.211,10.211,0,0,1,16.5,12ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm11.252,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z' />
          </svg>
          <span className={styles.text}>繁體中文</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='drop'
            viewBox='0 0 24 24'
            width='15'
            height='15'
          >
            <path d='M12,17.17a5,5,0,0,1-3.54-1.46L.29,7.54A1,1,0,0,1,1.71,6.12l8.17,8.17a3,3,0,0,0,4.24,0l8.17-8.17a1,1,0,1,1,1.42,1.42l-8.17,8.17A5,5,0,0,1,12,17.17Z' />
          </svg>
        </li>
        <li className={styles.account}>
          <div className={styles.profile}>
            <figure className={styles.logo}>
              <img
                src='https://frontendstaticfile.blob.core.windows.net/companylogo/20220407T151930-group1.png'
                alt='logo'
              />
            </figure>
            <span className={styles.text}>鼎日能源科技股份有限公司</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              id='drop'
              viewBox='0 0 24 24'
              width='15'
              height='15'
            >
              <path d='M12,17.17a5,5,0,0,1-3.54-1.46L.29,7.54A1,1,0,0,1,1.71,6.12l8.17,8.17a3,3,0,0,0,4.24,0l8.17-8.17a1,1,0,1,1,1.42,1.42l-8.17,8.17A5,5,0,0,1,12,17.17Z' />
            </svg>
          </div>
          <div className={styles.logout}>
            <Link to='/'>登出</Link>
          </div>
        </li>
      </ul>
      <div className={styles.header_middle}>
        <section className={styles.navbar}>
          {permissionAll.map((item) => (
            <NavLink
              to={item.url}
              className={({ isActive }) => (isActive ? styles.active : '')}
              key={item.id}
            >
              {item.name}
            </NavLink>
          ))}
        </section>
        {isRender && isRender.current === false ? null : <Search />}
      </div>
    </div>
  )
}

export default Header
