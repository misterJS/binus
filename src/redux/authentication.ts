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
  }).then(response => {
    return response
  })
    .catch((error) => {
      toast.error(error.response.data.errorMessage)
      return error
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

export const handleForgotThunk = createAsyncThunk('auth/handleForgotThunk', async (payload: any) => {
  const params = JSON.stringify({
    "Email": payload.email,
    "Captcha": "x"
  });
  const response = await axios.post(`${BASE_URL}auth/forgotpassword`, params, {
    "headers": {
      "content-type": "application/json",
      "Authorization": "Basic Nzk4ODVFODEtQzFCRi00OTkzLTlBMzUtOUQ4RDRBRUExREE3"
    }
  }).then(response => {
    return response
  })
    .catch((error) => {
      toast.error(error.response.data.errorMessage)
      return error
    })

  if (response?.data.resultCode === 200) {
    toast.success(response?.data.errorMessage)
  }

  return {
    data: response?.data
  }
})

export const handleRegistrationThunk = createAsyncThunk('auth/handleRegistrationThunk', async (payload: any) => {
  const params = JSON.stringify({
    "Email": payload.email,
    "FullName": payload.fullName,
    "CompanyName": payload.companyName,
    "PhoneNo": payload.phoneNumber,
    "Username": payload.username,
    "Password": payload.password,
    "ConfirmPassword": payload.confirmPassword,
    "Captcha": 'x'
  });
  const response = await axios.post(`${BASE_URL}auth/register`, params, {
    "headers": {
      "content-type": "application/json",
      "Authorization": "Basic Nzk4ODVFODEtQzFCRi00OTkzLTlBMzUtOUQ4RDRBRUExREE3"
    }
  }).then(response => {
    return response
  })
    .catch((error) => {
      toast.error(error.response.data.errorMessage)
      return error
    })

  if (response?.data.resultCode === 200) {
    toast.success(response.data.errorMessage)
  } else if (response?.data.resultCode === 500) {
    toast.error(response.data.errorMessage)
  }

  return {
    data: response?.data,
    error: response?.data
  }
})

export const handleChangePassword = createAsyncThunk('auth/handleChangePassword', async (payload: any) => {
  const email = localStorage.getItem("userData") as any
  const params = JSON.stringify({
    "Email": email.email,
    "OldPassword": payload.oldPassword,
    "Password": payload.password,
    "ConfirmPassword": payload.confirmPassword
  });
  const response = await axios.post(`${BASE_URL}auth/changepasswordsubmit`, params, {
    "headers": {
      "content-type": "application/json",
      "Authorization": "Basic Nzk4ODVFODEtQzFCRi00OTkzLTlBMzUtOUQ4RDRBRUExREE3"
    }
  }).then(response => {
    return response
  })
    .catch((error) => {
      toast.error(error.response.data.errorMessage)
      return error
    })

  if (response?.data.resultCode === 200) {
    toast.success('success change password')
  } else if (response?.data.resultCode === 500) {
    toast.error(response.data.errorMessage)
  }

  return {
    data: response?.data,
    error: response?.data
  }
})

export const handleLoginSsoThunk = createAsyncThunk('auth/handleLoginSsoThunk', async (payload: any) => {
  return {
    data: payload

  }
})

export const handleLogoutThunk = createAsyncThunk('auth/handleLogoutThunk', async () => {
  const response = await axios.post(`${BASE_URL}signout-callback-oidc`, {
    "headers": {
      "content-type": "application/json",
      "Authorization": "Basic Nzk4ODVFODEtQzFCRi00OTkzLTlBMzUtOUQ4RDRBRUExREE3"
    }
  }).then(response => {
    return response
  })
    .catch((error) => {
      toast.error(error.response.data.errorMessage)
      return error
    })

  if (response?.data.resultCode === 200) {
    toast.success(response.data.errorMessage)
  } else if (response?.data.resultCode === 500) {
    toast.error(response.data.errorMessage)
  }

  return {
    data: response?.data,
    error: response?.data
  }
})

export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userData: '',
    loginState: '',
    logoutState: '',
    loginSso: false,
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(handleLoginThunk.fulfilled, (state, action) => {
        state.loginState = action.payload.data
        state.logoutState = ''
        state.loginSso = false
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
      .addCase(handleLogoutThunk.fulfilled, (state, action) => {
        state.logoutState = action.payload.data
        state.loginState = ''
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        state.loginSso = false
        state.loading = false
      })
      .addCase(handleLogoutThunk.rejected, (state, action) => {
        state.logoutState = action.error.message || 'no error'
        state.loading = false
      })
      .addCase(handleLogoutThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(handleForgotThunk.fulfilled, (state, action) => {
        state.loginState = action.payload.data
        state.loginSso = false
        state.loading = false
      })
      .addCase(handleForgotThunk.rejected, (state, action) => {
        state.loginState = action.error.message || 'no data'
        state.loading = false
      })
      .addCase(handleForgotThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(handleRegistrationThunk.fulfilled, (state, action) => {
        state.loginState = action.payload.data
        state.loginSso = false
        localStorage.setItem('token', action.payload.data.returnValue.token)
        localStorage.setItem('userData', JSON.stringify(action.payload.data.returnValue))
        state.loading = false
      })
      .addCase(handleRegistrationThunk.rejected, (state, action) => {
        state.loginState = action.error.message || 'no error'
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        state.loading = false
      })
      .addCase(handleRegistrationThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(handleChangePassword.fulfilled, (state, action) => {
        state.loginState = action.payload.data
        state.loginSso = false
        state.loading = false
      })
      .addCase(handleChangePassword.rejected, (state, action) => {
        state.loginState = action.error.message || 'no error'
        state.loading = false
      })
      .addCase(handleChangePassword.pending, (state) => {
        state.loading = true
      })
      .addCase(handleLoginSsoThunk.fulfilled, (state, action) => {
        state.loginState = action.payload.data
        state.loginSso = true
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