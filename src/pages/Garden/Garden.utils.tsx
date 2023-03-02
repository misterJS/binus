import { useDispatch, useSelector } from "react-redux"
import { getProjectList } from "../../redux/garden"
import { useQueryParams } from "../../shared";

export const useGardenSetup = () => {
    const dispatch = useDispatch()
    const { set, category, maxPoint, minPoint, sortBy } = useQueryParams();
    const garden = useSelector((state: any) => state.garden)

    const getProjectsList = () => {
        dispatch(getProjectList({
            category,
            minPoint,
            maxPoint,
            sortBy
        }))
    }

    return {
        getProjectsList,
        set,
        garden
    }
}