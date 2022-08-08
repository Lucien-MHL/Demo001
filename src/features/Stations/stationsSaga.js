import { select, takeEvery, put } from 'redux-saga/effects'
import { changeStations, changeSolarSource } from './index'
import { dccChange } from '../Capacity'

function* filtrationData() {
  const action = yield select(changeStations)
  const { stationsID } = action.payload.filter
  yield put(changeStations(stationsID))
  yield put(changeSolarSource(stationsID))
}

function* changeDcc() {
  const action = yield select(changeStations)
  const { sessionStations } = action.payload.stations
  yield put(dccChange(sessionStations))
}

function* stationsSaga() {
  yield takeEvery('filter/valueFilter', filtrationData)
  yield takeEvery('stations/changeStations', changeDcc)
  yield takeEvery('stations/dailyOrYearly', filtrationData)
}

export default stationsSaga
