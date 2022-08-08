import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { dccCalculate } from '../Capacity/index'
import { loadingStations } from '../Stations/index'
import { loadingFinish } from './index'

const exhibitAPI = process.env.FAKE_EXHIBIT_DATA

function* fetchExhibitStations() {
  const obj = {
    UserID: 'lucien_dsegom',
    PassToken: '',
    Language: 'TW'
  }
  const { data } = yield call(() => axios.post(exhibitAPI, obj))
  if (data) {
    yield put(loadingFinish())
    yield put(dccCalculate())
    yield put(loadingStations(data))
  }
}

function* exhibitSaga() {
  yield takeEvery('exhibit/loadingData', fetchExhibitStations)
}

export default exhibitSaga
