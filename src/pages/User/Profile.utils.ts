import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { editProfile, editProfileDone, getContributionJourney, getListJobPost, getListMission, getProfiles } from "../../redux/profile"

export const useProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const profile = useSelector((state: any) => state.client.profile)
    console.log(profile.editProfile);


    useEffect(() => {
        if (profile.profile !== null) {
            dispatch(getContributionJourney({ userId: profile?.profile?.returnValue[0]?.id }))
            dispatch(getListJobPost({ userId: profile?.profile?.returnValue[0]?.id }))
            dispatch(getListMission({ userId: profile?.profile?.returnValue[0]?.id }))
        }
    }, [profile.profile])


    const getProfilesData = () => {
        dispatch(getProfiles({ email: "yusdion3007@gmail.com" }))
    }


    useEffect(() => {
        if (profile.editProfile?.resultCode === 200) {
            navigate("/user")
            dispatch(editProfileDone())
        }
    }, [profile.editProfile])

    const editUser = (payload: any) => {
        dispatch(editProfile(payload))
    }

    return {
        getProfilesData,
        editProfile: editUser,
        profile
    }
}