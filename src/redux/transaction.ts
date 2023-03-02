// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast'
import { BASE_URL } from '../utils'

export const getProjectAsClient = createAsyncThunk('transaction/getProjectAsClient', async (payload: any) => {
  const params = JSON.stringify({
    "Status": payload.status,
    "MinPoint": 0,
    "MaxPoint": 100,
    "SortBy": "Latest",
    "UserIn": "yusdion3007@gmail.com"
  });
  const response = await axios.post(`${BASE_URL}Transaction/GetProjectAsClient?size=10&page=1`, params, {
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
    toast.success(response.data.errorMessage)
  } else if (response.data.resultCode === 500) {
    toast.error(response.data.errorMessage)
  }

  return {
    data: response.data
  }
})

export const getProjectAsWorker = createAsyncThunk('transaction/getProjectAsWorker', async (payload: any) => {
    const params = JSON.stringify({
      "UserIn": "yusdion3007@gmail.com"
    });
    const response = await axios.post(`${BASE_URL}Transaction/GetProjectAsWorker?size=10&page=1`, params, {
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
      toast.success(response.data.errorMessage)
    } else if (response.data.resultCode === 500) {
      toast.error(response.data.errorMessage)
    }
  
    return {
      data: response.data
    }
  })

  export const getDetailProjectAsWorker = createAsyncThunk('transaction/getDetailProjectAsWorker', async (id: number) => {
    const response = await axios.get(`${BASE_URL}Transaction/GetDetailProjectAsWorker?id=${id}`, {
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
      toast.success(response.data.errorMessage)
    } else if (response.data.resultCode === 500) {
      toast.error(response.data.errorMessage)
    }
  
    return {
      data: response.data
    }
  })

  export const getDetailProjectAsClient = createAsyncThunk('transaction/getDetailProjectAsClient', async (id: number) => {
    const response = await axios.get(`${BASE_URL}Transaction/GetDetailProjectAsClient?id=${id}`, {
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
      toast.success(response.data.errorMessage)
    } else if (response.data.resultCode === 500) {
      toast.error(response.data.errorMessage)
    }
  
    return {
      data: response.data
    }
  })

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    loading: false,
    projects: [] as any,
    projectDetail: '' as any
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProjectAsClient.fulfilled, (state, action) => {
        state.projects = action.payload.data
        state.loading = false
      })
      .addCase(getProjectAsClient.rejected, (state, action) => {
        state.projects = action.error
        state.loading = false
      })
      .addCase(getProjectAsClient.pending, (state) => {
        state.loading = true
      })
      .addCase(getProjectAsWorker.fulfilled, (state, action) => {
        state.projects = action.payload.data
        state.loading = false
      })
      .addCase(getProjectAsWorker.rejected, (state, action) => {
        state.projects = action.error
        state.loading = false
      })
      .addCase(getProjectAsWorker.pending, (state) => {
        state.loading = true
      })
      .addCase(getDetailProjectAsWorker.fulfilled, (state, action) => {
        state.projectDetail = action.payload.data
        state.loading = false
      })
      .addCase(getDetailProjectAsWorker.rejected, (state, action) => {
        state.projectDetail = action.error
        state.loading = false
      })
      .addCase(getDetailProjectAsWorker.pending, (state) => {
        state.loading = true
      })
      .addCase(getDetailProjectAsClient.fulfilled, (state, action) => {
        state.projectDetail = action.payload.data
        state.loading = false
      })
      .addCase(getDetailProjectAsClient.rejected, (state, action) => {
        state.projectDetail = action.error
        state.loading = false
      })
      .addCase(getDetailProjectAsClient.pending, (state) => {
        state.loading = true
      });
  }
})

export const { } = transactionSlice.actions

export default transactionSlice.reducer