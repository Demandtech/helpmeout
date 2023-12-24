import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit'
import customFetch from '../../configs'
import { toggleSuccessModal } from '../slices/userSlice'
import Cookies from 'js-cookie'

export const signupUser = createAsyncThunk(
  'users/signup',
  async (formData, thunkAPI) => {
    try {
      const { data, status } = await customFetch.post('users', formData)

      if (status !== 201) throw new Error('Error occured!')

      localStorage.setItem('user', JSON.stringify(data.user))
      thunkAPI.dispatch(toggleSuccessModal(true))
      localStorage.removeItem('signup_data')
      return data
    } catch (error) {
      if (error.status === 500) return
      return thunkAPI.rejectWithValue(error?.response.data.detail)
    }
  }
)

export const verifyUser = createAsyncThunk(
  'users/verify',
  async (formData, thunkAPI) => {
    try {
      const { data, status } = await customFetch.post('users/verify', formData)

      if (status !== 202) return

      console.log(data, status)
      thunkAPI.dispatch(toggleSuccessModal('false'))
    } catch (error) {
      console.error(error)
      if (error.status === 500) return
      thunkAPI.rejectWithValue(error?.response.data.detail)
    }
  }
)

export const loginUser = createAsyncThunk(
  'login/email',
  async (formData, thunkAPI) => {
    try {
      const { data, status } = await customFetch.post('/auth/login', formData)

      if (status !== 200) return

      const getUserAction = await thunkAPI.dispatch(getUser(data.access_token))
      const userResult = unwrapResult(getUserAction)

      if (userResult) {
        Cookies.set('token', data.access_token, {
          expires: Number(import.meta.env.VITE_TOKEN_EXPIRATION_DAY),
          path: '',
        })
        localStorage.removeItem('login_data')
        return true
      } else {
        Cookies.remove('token')
        return thunkAPI.rejectWithValue('Login failed, please try again!')
      }
    } catch (error) {
      Cookies.remove('token')
      if (error.status === 500) {
        return thunkAPI.rejectWithValue('Server error, please try again!')
      }
      return thunkAPI.rejectWithValue(error.response.data.detail)
    }
  }
)

// export const googleLoginUser = createAsyncThunk(
//   'login/google',
//   async (_, thunkAPI) => {
//     try {
//       const { data, status } = await customFetch.get('/auth/login/google')

//       if (status !== 200) return

//       const getUserAction = await thunkAPI.dispatch(getUser(data.access_token))
//       const userResult = unwrapResult(getUserAction)

//       if (userResult) {
//         Cookies.set('token', data.access_token, {
//           expires: Number(import.meta.env.VITE_TOKEN_EXPIRATION_DAY),
//           path: '',
//         })
//         return true
//       } else {
//         Cookies.remove('token')
//         return thunkAPI.rejectWithValue('Login failed, please try again!')
//       }
//     } catch (error) {
//       Cookies.remove('token')
//       if (error.status === 500) {
//         return thunkAPI.rejectWithValue('Server error, please try again!')
//       }
//       return thunkAPI.rejectWithValue(error.response.data.detail)
//     }
//   }
// )

export const googleLoginUser = createAsyncThunk('login/google', async () => {
  try {
    const { status, data } = await customFetch('/auth/login/google', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log(status, data)
  } catch (error) {
    console.error(error)
  }
})

export const getUser = createAsyncThunk('users/me', async (token) => {
  try {
    const { data } = await customFetch.get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (error) {
    if (error.status === 500) return
    Cookies.remove('token')
    console.log(error)
    return false
  }
})
