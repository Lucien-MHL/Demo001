import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sessionStations: [],
  fetchStations: [],
  solarSource: {},
  time: 'daily'
}

const stationsSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {
    loadingStations: (state, { payload }) => {
      const stationsArr = JSON.parse(window.sessionStorage.getItem('stations'))
      state.sessionStations = stationsArr
      state.fetchStations = payload.exhibit.stations

      const obj = {
        energy: 0,
        dmy: 0,
        PR: 0,
        co2Reduction: 0,
        oilEquivalent: 0,
        treesPlanted: 0,
        electricitySold: 0
      }

      payload.exhibit.stations.forEach((item) => {
        obj.energy += +item.energy[state.time]
        obj.dmy += +item.dmy[state.time]
        obj.PR += +item.PR[state.time]
        obj.co2Reduction += +item.co2Reduction[state.time]
        obj.electricitySold += +item.electricitySold[state.time]
        obj.oilEquivalent += +item.oilEquivalent[state.time]
        obj.treesPlanted += +item.treesPlanted[state.time]
      })

      state.solarSource = {
        energy: obj.energy.toLocaleString('en'),
        dmy: obj.dmy.toLocaleString('en'),
        PR: obj.PR.toLocaleString('en'),
        co2Reduction: obj.co2Reduction.toLocaleString('en'),
        electricitySold: obj.electricitySold.toLocaleString('en'),
        oilEquivalent: obj.oilEquivalent.toLocaleString('en'),
        treesPlanted: obj.treesPlanted.toLocaleString('en')
      }
    },
    changeStations: (state, { payload }) => {
      const stationsArr = JSON.parse(window.sessionStorage.getItem('stations'))
      const a = stationsArr.filter((item) => payload.includes(item.zoneId))
      state.sessionStations = a
    },
    changeSolarSource: (state, { payload }) => {
      const arr = state.fetchStations.filter((item) => payload.includes(item.zoneId))

      const obj = {
        energy: 0,
        dmy: 0,
        PR: 0,
        co2Reduction: 0,
        oilEquivalent: 0,
        treesPlanted: 0,
        electricitySold: 0
      }

      arr.forEach((item) => {
        obj.energy += +item.energy[state.time]
        obj.dmy += +item.dmy[state.time]
        obj.PR += +item.PR[state.time]
        obj.co2Reduction += +item.co2Reduction[state.time]
        obj.electricitySold += +item.electricitySold[state.time]
        obj.oilEquivalent += +item.oilEquivalent[state.time]
        obj.treesPlanted += +item.treesPlanted[state.time]
      })

      state.solarSource = {
        energy: obj.energy.toLocaleString('en'),
        dmy: obj.dmy.toLocaleString('en'),
        PR: obj.PR.toLocaleString('en'),
        co2Reduction: obj.co2Reduction.toLocaleString('en'),
        electricitySold: obj.electricitySold.toLocaleString('en'),
        oilEquivalent: obj.oilEquivalent.toLocaleString('en'),
        treesPlanted: obj.treesPlanted.toLocaleString('en')
      }
    },
    dailyOrYearly: (state, { payload }) => {
      state.time = payload
    }
  }
})

export const { loadingStations, changeStations, changeSolarSource, dailyOrYearly } =
  stationsSlice.actions

export default stationsSlice.reducer
