import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getProjectList } from "../../redux/garden"

export const useGardenSetup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const garden = useSelector((state: any) => state.garden)

    const getProjectsList = () => {
        dispatch(getProjectList(null))
    }

    return {
        getProjectsList,
        garden
    }
}