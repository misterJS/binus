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

export const getProjectList = createAsyncThunk('garden/getProjectList', async (payload: any) => {
  const params = JSON.stringify({
    "Category": "1",
    "MinPoint": 0,
    "MaxPoint": 100,
    "SortBy": "News",
    "UserIn": "yusdion3007@gmail.com"
  });
  const response = await axios.post(`${BASE_URL}Garden/GetProject?size=10&page=1`, params, {
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

export const gardenSlice = createSlice({
  name: 'garden',
  initialState: {
    userData: '',
    loading: false,
    projects: [],
    getProjectStatus: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProjectList.fulfilled, (state, action) => {
        state.projects = action.payload.data
        state.getProjectStatus = 'success'
        state.loading = false
      })
      .addCase(getProjectList.rejected, (state, action) => {
        state.getProjectStatus = 'fail'
        state.loading = false
      })
      .addCase(getProjectList.pending, (state) => {
        state.getProjectStatus = ''
        state.loading = true
      });
  }
})

export const { } = gardenSlice.actions

export default gardenSlice.reducer