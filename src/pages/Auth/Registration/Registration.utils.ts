import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleLoginSsoThunk, handleRegistrationThunk } from "../../../redux/authentication"

export const useRegistrationSetup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector((state: any) => state.auth)

    useEffect(() => {
        if (auth.loading === false) {
            if (auth?.loginState.resultCode === 200) {
                navigate('/')
            }
        }

    }, [auth?.loading])


    const handleRegister = (data: any) => {
        console.log(data);

        dispatch(handleRegistrationThunk(data))
    }

    const handleLoginSso = (data: any) => {
        dispatch(handleLoginSsoThunk(data))
    }

    return {
        handleRegister,
        handleLoginSso
    }
}