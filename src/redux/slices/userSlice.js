import { createSlice } from '@reduxjs/toolkit'
import {
  getUser,
  loginUser,
  signupUser,
  googleLoginUser,
} from '../thunks/userThunk'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

const initialState = {
  user: null,
  isAuthenticated: null,
  isLoading: false,
  successModal: false,
}
const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    toggleSuccessModal: (state, { payload }) => {
      state.successModal = payload
    },
    logoutUser: () => {
      Cookies.remove('token', { path: '' })
      toast.info('Logout successfully')
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true
        state.user = null
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
        state.isAuthenticated = !!payload
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.user = null
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false
        toast.success(`Welcome back ${state.user?.first_name}!`)
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false
        state.user = null
        toast.error(payload)
      })
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true
        state.user = null
        state.successModal = false
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.isLoading = false
        // state.successModal = true
        console.log(state.successModal)
      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        console.log(payload)
        state.isLoading = false
        state.user = null
        state.successModal = false
      })
      .addCase(googleLoginUser.pending, (state) => {
        state.isLoading = true
        state.user = null
      })
      .addCase(googleLoginUser.fulfilled, (state) => {
        state.isLoading = false
        toast.success(`Welcome ${state.user?.first_name}!`)
      })
      .addCase(googleLoginUser.rejected, (state, { payload }) => {
        state.isLoading = false
        state.user = null
        toast.error(payload)
      })
  },
})

export const { toggleSuccessModal, logoutUser } = userSlice.actions
export default userSlice.reducer
