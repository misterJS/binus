import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../utils";

export const getProfiles = createAsyncThunk('profile/getProfiles', async (payload: any) => {
    const response = await axios.get(`${BASE_URL}/auth/profile?email=${payload.email}`, {
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

export const editProfile = createAsyncThunk('profile/editProfile', async (payload: any) => {
    const params = JSON.stringify({
        "Email": payload.email,
        "Username": payload.username,
        "MemmberSince": payload.memberSince,
        "FullName": payload.fullname,
        "CompanyName": payload.companyName,
        "PhoneNo": payload.phoneNo,
        "Major": payload.major,
        "YearClass": payload.yearClass,
        "Nim": payload.nim,
        "File": payload.file
      });
    const response = await axios.post(`${BASE_URL}/auth/update`, params, {
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

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: null,
        loading: false,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProfiles.fulfilled, (state, action) => {
                state.profile = action.payload.data
                state.loading = false
            })
            .addCase(getProfiles.rejected, (state, action) => {
                state.profile = null
                state.loading = false
            })
            .addCase(getProfiles.pending, (state) => {
                state.profile = null
                state.loading = true
            })
            .addCase(editProfile.fulfilled, (state, action) => {
                state.profile = action.payload.data
                state.loading = false
            })
            .addCase(editProfile.rejected, (state, action) => {
                state.profile = null
                state.loading = false
            })
            .addCase(editProfile.pending, (state) => {
                state.profile = null
                state.loading = true
            });
    }
})

export const { } = profileSlice.actions

export default profileSlice.reducer