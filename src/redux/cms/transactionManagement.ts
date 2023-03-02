// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast'
import { BASE_URL } from '../../utils'

export const getActiveTransaction = createAsyncThunk('transactionManagement/getActiveTransaction', async (payload: any) => {
  const params = JSON.stringify({
    "Status": payload.status,
    "UserIn": payload.userIn
  });
  const response = await axios.post(`${BASE_URL}TransactionManagement/GetActive?size=10&page=1`, params, {
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

export const getApproveTransaction = createAsyncThunk('transactionManagement/getApproveTransaction', async (payload: any) => {
  const params = JSON.stringify({
    "Id": payload.id,
    "UserIn": payload.userId
  });
  const response = await axios.post(`${BASE_URL}TransactionManagement/ApproveProject?size=10&page=1`, params, {
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

export const getRejectTransaction = createAsyncThunk('transactionManagement/getRejectTransaction', async (payload: any) => {
  const params = JSON.stringify({
    "Id": payload.id,
    "UserIn": payload.userIn
  });
  const response = await axios.post(`${BASE_URL}TransactionManagement/RejectProject?size=10&page=1`, params, {
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

export const getDetailTransaction = createAsyncThunk('transactionManagement/getDetailTransaction', async (payload: any) => {
  const response = await axios.get(`${BASE_URL}TransactionManagement/GetDetail?id=${payload.id}`, {
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

export const transactionManagementSlice = createSlice({
  name: 'transactionManagement',
  initialState: {
    loading: false,
    transactions: [] as any,
    transactionDetail: '' as any
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getActiveTransaction.fulfilled, (state, action) => {
        state.transactions = action.payload.data
        state.loading = false
      })
      .addCase(getActiveTransaction.rejected, (state, action) => {
        state.transactions = action.error
        state.loading = false
      })
      .addCase(getActiveTransaction.pending, (state) => {
        state.loading = true
      })
      .addCase(getApproveTransaction.fulfilled, (state, action) => {
        state.transactions = action.payload.data
        state.loading = false
      })
      .addCase(getApproveTransaction.rejected, (state, action) => {
        state.transactions = action.error
        state.loading = false
      })
      .addCase(getApproveTransaction.pending, (state) => {
        state.loading = true
      })
      .addCase(getRejectTransaction.fulfilled, (state, action) => {
        state.transactions = action.payload.data
        state.loading = false
      })
      .addCase(getRejectTransaction.rejected, (state, action) => {
        state.transactions = action.error
        state.loading = false
      })
      .addCase(getRejectTransaction.pending, (state) => {
        state.loading = true
      })
      .addCase(getDetailTransaction.fulfilled, (state, action) => {
        state.transactionDetail = action.payload.data
        state.loading = false
      })
      .addCase(getDetailTransaction.rejected, (state, action) => {
        state.transactionDetail = action.error
        state.loading = false
      })
      .addCase(getDetailTransaction.pending, (state) => {
        state.loading = true
      });
  }
})

export const { } = transactionManagementSlice.actions

export default transactionManagementSlice.reducer