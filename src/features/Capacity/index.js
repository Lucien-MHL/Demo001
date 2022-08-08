import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  view: {
    dcc: 0
  }
}

const capacitySlice = createSlice({
  name: 'capacity',
  initialState,
  reducers: {
    dccCalculate: (state) => {
      const stations = JSON.parse(window.sessionStorage.getItem('stations'))
      let sum = 0
      stations.forEach((item) => {
        sum += +item.dcc
      })
      state.view.dcc = sum.toLocaleString('en')
    },
    dccChange: (state, { payload }) => {
      let sum = 0
      payload.forEach((item) => {
        sum += +item.dcc
      })
      state.view.dcc = sum.toLocaleString('en')
    }
  }
})

export const { dccCalculate, dccChange } = capacitySlice.actions

export default capacitySlice.reducer
