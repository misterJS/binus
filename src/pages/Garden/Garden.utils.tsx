import { useDispatch, useSelector } from "react-redux"
import { getProjectList } from "../../redux/garden"

export const useGardenSetup = () => {
    const dispatch = useDispatch()
    const garden = useSelector((state: any) => state.garden)

    const getProjectsList = () => {
        dispatch(getProjectList(null))
    }

    return {
        getProjectsList,
        garden
    }
}