import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  stationsID: []
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    valueFilter: (state, { payload }) => {
      const stations = JSON.parse(window.sessionStorage.getItem('stations'))
      const certainArr = stations.filter(
        (item) =>
          payload === 'all' ||
          item.type.id === payload ||
          item.region.id === payload ||
          item.customsGroup.some((x) => x.id.includes(payload))
      )
      state.stationsID = certainArr.map((item) => item.zoneId)
    }
  }
})

export const { valueFilter } = filterSlice.actions

export default filterSlice.reducer
