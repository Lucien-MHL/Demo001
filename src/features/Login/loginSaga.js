import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { loginSuccess } from './index'

const loginAPI = process.env.FAKE_LOGIN_DATA

function* fetchData() {
  const obj = {
    UserId: 'lucien_dsegom',
    Password: 'Dse25172931'
  }
  const { data } = yield call(() => axios.post(loginAPI, obj))
  if (data.result) {
    window.sessionStorage.setItem('user', JSON.stringify(data.commonPart.user))
    window.sessionStorage.setItem(
      'stations',
      JSON.stringify(data.commonPart.stations)
    )
    window.sessionStorage.setItem('filter', JSON.stringify(data.commonPart.filter))
    yield put(loginSuccess())
  }
}

function* loginSaga() {
  yield takeEvery('login/loginBegin', fetchData)
}

export default loginSaga
