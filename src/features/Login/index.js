import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  commonPart: {},
  view: {
    isLoading: false,
    page: 'login'
  }
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginBegin: (state) => {
      state.view.isLoading = true
    },
    loginSuccess: (state) => {
      state.view.isLoading = false
      window.location.replace('/exhibit')
    },
    loginFailure: (state) => {
      state.view.isLoading = false
    },
    forwardForgetPage: (state) => {
      state.view.page = 'forget'
    }
  }
})

export const { loginBegin, loginSuccess, loginFailure } = loginSlice.actions

export default loginSlice.reducer
