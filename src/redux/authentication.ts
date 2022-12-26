// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast'
import { BASE_URL } from '../utils'

// const initialUser = () => {
//   const item = window.localStorage.getItem('userData')
//   //** Parse stored json or if none return initialValue
//   return item ? JSON.parse(item) : {}
// }

export const handleLoginThunk = createAsyncThunk('auth/handleLoginThunk', async (payload: any) => {
  const params = JSON.stringify({
    "Username": payload.email,
    "Password": payload.password,
    "Captcha": payload.captcha
  });
  const response = await axios.post(`${BASE_URL}auth/login`, params, {
    "headers": {
      "content-type": "application/json",
      "Authorization": "Basic Nzk4ODVFODEtQzFCRi00OTkzLTlBMzUtOUQ4RDRBRUExREE3"
    }
  })

  if (response.data.resultCode === 200) {
    toast.success(response.data.errorMessage)
  } else if (response.data.resultCode === 500) {
    toast.error(response.data.errorMessage)
  }

  return {
    data: response.data
  }
})

export const handleLoginSsoThunk = createAsyncThunk('auth/handleLoginSsoThunk', async (payload: any) => {
  return {
    data: payload
  }
})

export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userData: '',
    loginState: '',
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(handleLoginThunk.fulfilled, (state, action) => {
        state.loginState = action.payload.data
        localStorage.setItem('token', action.payload.data.returnValue.token)
        localStorage.setItem('userData', JSON.stringify(action.payload.data.returnValue))
        state.loading = false
      })
      .addCase(handleLoginThunk.rejected, (state, action) => {
        state.loginState = action.error.message || 'no error'
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        state.loading = false
      })
      .addCase(handleLoginThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(handleLoginSsoThunk.fulfilled, (state, action) => {
        state.loginState = action.payload.data
        localStorage.setItem('token', action.payload.data.access_token)
        localStorage.setItem('userData', action.payload.data.client_info)
        state.loading = false
      })
      .addCase(handleLoginSsoThunk.rejected, (state, action) => {
        state.loginState = action.error.message || 'no error'
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        state.loading = false
      })
      .addCase(handleLoginSsoThunk.pending, (state) => {
        state.loading = true
      })
  }
})

export const { } = authSlice.actions

export default authSlice.reducer