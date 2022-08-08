import { createSlice } from '@reduxjs/toolkit'

const exhibitSlice = createSlice({
  name: 'exhibit',
  initialState: {
    isLoading: false
  },
  reducers: {
    loadingData: (state) => {
      state.isLoading = true
    },
    loadingFinish: (state) => {
      state.isLoading = false
    }
  }
})

export const { loadingData, loadingFinish } = exhibitSlice.actions

export default exhibitSlice.reducer
