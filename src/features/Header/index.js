import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  view: {}
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    logoutBtn: () => {
      window.sessionStorage.clear()
      window.location.replace('/')
    }
  }
})

export const { logoutBtn } = headerSlice.actions

export default headerSlice.reducer
