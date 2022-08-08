import { all } from 'redux-saga/effects'
import exhibitSaga from '../features/Exhibit/exhibitSaga'
import loginSaga from '../features/Login/loginSaga'
import stationsSaga from '../features/Stations/stationsSaga'

function* rootSaga() {
  yield all([loginSaga(), exhibitSaga(), stationsSaga()])
}

export default rootSaga
