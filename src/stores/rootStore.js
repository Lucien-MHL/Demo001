import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import loginReducer from '../features/Login/index'
import exhibitReducer from '../features/Exhibit/index'
import headerReducer from '../features/Header/index'
import capacityReducer from '../features/Capacity/index'
import stationsReducer from '../features/Stations/index'
import filterReducer from '../features/Filter/index'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    login: loginReducer,
    exhibit: exhibitReducer,
    header: headerReducer,
    capacity: capacityReducer,
    stations: stationsReducer,
    filter: filterReducer
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
