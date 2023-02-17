// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast'
import { BASE_URL } from '../utils'

export const getMessageList = createAsyncThunk('goBuzz/getMessageList', async () => {
  const response = await axios.get(`${BASE_URL}/GoBuzz/GetChatList?page=1&size=100`, {
    "headers": {
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  }).then(response => {
    return response
  })
    .catch((error) => {
      toast.error(error.response.data.errorMessage)
      return error
    })

  if (response.data.resultCode === 200) {
    // toast.success(response.data.errorMessage)
  } else if (response.data.resultCode === 500) {
    toast.error(response.data.errorMessage)
  }

  return {
    data: response.data
  }
})

export const postMessage = createAsyncThunk('goBuzz/postMessage', async (payload: any) => {
  const params = JSON.stringify({
    "Message": payload.message,
    "UserIdTarget": "2",
    "UserIn": "yusdion3007@gmail.com"
  });
  const response = await axios.post(`${BASE_URL}/GoBuzz/PostChat`, params, {
    "headers": {
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  }).then(response => {
    return response
  })
    .catch((error) => {
      toast.error(error.response.data.errorMessage)
      return error
    })

  if (response.data.resultCode === 200) {
    // toast.success(response.data.errorMessage)
  } else if (response.data.resultCode === 500) {
    toast.error(response.data.errorMessage)
  }

  return {
    data: response.data
  }
})

export const getMessage = createAsyncThunk('goBuzz/getMessage', async () => {
  const params = JSON.stringify({
    "UserIn": "yusdion3007@gmail.com"
  });
  const response = await axios.post(`${BASE_URL}/GoBuzz/GetChatByUser?page=1&size=100`, params, {
    "headers": {
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  }).then(response => {
    return response
  })
    .catch((error) => {
      toast.error(error.response.data.errorMessage)
      return error
    })

  if (response.data.resultCode === 200) {
    // toast.success(response.data.errorMessage)
  } else if (response.data.resultCode === 500) {
    toast.error(response.data.errorMessage)
  }

  return {
    data: response.data
  }
})

export const goBuzzSlice = createSlice({
  name: 'goBuzz',
  initialState: {
    userData: '',
    loading: false,
    projects: [],
    messageByUser: '',
    messageList: '',
    messageStatus: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMessageList.fulfilled, (state, action) => {
        state.messageList = action.payload.data
        state.messageStatus = 'success'
        state.loading = false
      })
      .addCase(getMessageList.rejected, (state, action) => {
        state.messageStatus = 'fail'
        state.loading = false
      })
      .addCase(getMessageList.pending, (state) => {
        state.messageStatus = ''
        state.loading = true
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.messageByUser = action.payload.data
        state.messageStatus = 'success'
        state.loading = false
      })
      .addCase(getMessage.rejected, (state, action) => {
        state.messageStatus = 'fail'
        state.loading = false
      })
      .addCase(getMessage.pending, (state) => {
        state.messageStatus = ''
        state.loading = true
      })
      .addCase(postMessage.fulfilled, (state, action) => {
        state.projects = action.payload.data
        state.messageStatus = 'success'
        state.loading = false
      })
      .addCase(postMessage.rejected, (state, action) => {
        state.messageStatus = 'fail'
        state.loading = false
      })
      .addCase(postMessage.pending, (state) => {
        state.messageStatus = ''
        state.loading = true
      });
  }
})

export const { } = goBuzzSlice.actions

export default goBuzzSlice.reducer