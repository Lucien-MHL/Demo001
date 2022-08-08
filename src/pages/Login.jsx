import React from 'react'
import { useDispatch } from 'react-redux'
import styles from '../sass/login.module.scss'
import { loginBegin } from '../features/Login/index'

function Login() {
  const dispatch = useDispatch()

  return (
    <div className={styles.contain}>
      <button
        type='submit'
        className={styles.btn}
        onClick={() => dispatch(loginBegin())}
      >
        點我登入
      </button>
    </div>
  )
}

export default Login
