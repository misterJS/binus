import { useDispatch, useSelector } from "react-redux"
import { editProfile, getProfiles } from "../../redux/profile"

export const useProfile = () => {
    const dispatch = useDispatch()
    const profile = useSelector((state: any) => state.profile)

    const getProfilesData = () => {
        dispatch(getProfiles({ email: "yusdion3007@gmail.com" }))
    }

    const editUser = (payload: any) => {
        dispatch(editProfile(payload))
    }

    return {
        getProfilesData,
        editProfile: editUser,
        profile
    }
}