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

export const getContributionJourney = createAsyncThunk('profile/getContributionJourney', async (payload: any) => {
    const response = await axios.get(`${BASE_URL}auth/ContributionJourney?userid=${payload.userId}`, {
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

export const getListJobPost = createAsyncThunk('profile/getListJobPost', async (payload: any) => {
    const response = await axios.get(`${BASE_URL}auth/UserListJobPost?page=1&size=10&userid=${payload.userId}`, {
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

export const getListMission = createAsyncThunk('profile/getListMission', async (payload: any) => {
    const response = await axios.get(`${BASE_URL}auth/UserListMission?page=1&size=10&userid=${payload.userId}`, {
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
    const params = new FormData()
    params.append("Email", payload.email)
    params.append("Username", payload.username)
    params.append("CompanyName", payload.companyName)
    params.append("Major", payload.major)
    params.append("YearClass", payload.yearClass)
    if (payload.nim !== null) {
        params.append("Nim", payload.nim)
    }
    if (payload.memberSince) {
        params.append("MemberSince", payload.memberSince)
    }
    if (payload.fullname !== null) {
        params.append("FullName", payload.fullname)
    }
    if (payload.phoneNo !== null) {
        params.append("PhoneNo", payload.phoneNo)
    }
    if (payload.bio !== null) {
        params.append("Bio", payload.bio)
    }
    if (payload.file !== null) {
        params.append("File", payload.file)
    }
    const response = await axios.post(`${BASE_URL}auth/update`, params, {
        "headers": {
            "content-type": "multipart/form-data",
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

export const editProfileDone = createAsyncThunk('profile/editProfileDone', async () => {
    return null;
})

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: null,
        editProfile: null,
        contributionJourney: null,
        listJobPost: null,
        listMission: null,
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
            .addCase(getContributionJourney.fulfilled, (state, action) => {
                state.contributionJourney = action.payload.data
                state.loading = false
            })
            .addCase(getContributionJourney.rejected, (state, action) => {
                state.contributionJourney = null
                state.loading = false
            })
            .addCase(getContributionJourney.pending, (state) => {
                state.contributionJourney = null
                state.loading = true
            })
            .addCase(getListJobPost.fulfilled, (state, action) => {
                state.listJobPost = action.payload.data
                state.loading = false
            })
            .addCase(getListJobPost.rejected, (state, action) => {
                state.listJobPost = null
                state.loading = false
            })
            .addCase(getListJobPost.pending, (state) => {
                state.listJobPost = null
                state.loading = true
            })
            .addCase(getListMission.fulfilled, (state, action) => {
                state.listMission = action.payload.data
                state.loading = false
            })
            .addCase(getListMission.rejected, (state, action) => {
                state.listMission = null
                state.loading = false
            })
            .addCase(getListMission.pending, (state) => {
                state.listMission = null
                state.loading = true
            })
            .addCase(editProfile.fulfilled, (state, action) => {
                state.editProfile = action.payload.data
                state.loading = false
            })
            .addCase(editProfile.rejected, (state, action) => {
                state.editProfile = null
                state.loading = false
            })
            .addCase(editProfile.pending, (state) => {
                state.editProfile = null
                state.loading = true
            })
            .addCase(editProfileDone.fulfilled, (state) => {
                state.editProfile = null
                state.loading = false
            });
    }
})

export const { } = profileSlice.actions

export default profileSlice.reducer