import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProjectAsClient, getProjectAsWorker } from "../../redux/transaction"
import { useQueryParams } from "../../shared"

export const useTransaction = () => {
    const dispatch = useDispatch()
    const { set, slug, status } = useQueryParams();

    const transaction = useSelector((state: any) => state.transaction)

    useEffect(() => {
        if (transaction.resultCode !== 200 && slug === 'client') {
            dispatch(getProjectAsClient({ userIn: 'yusdion3007@gmail.com', status: status }))
        } else {
            dispatch(getProjectAsWorker({ userIn: 'yusdion3007@gmail.com', status: status }))
        }
    }, [transaction.project, status])

    const getProjectByWorker = useCallback(() => {
        set("slug", "worker")
        dispatch(getProjectAsWorker({ userIn: 'yusdion3007@gmail.com', status: status }))
    }, [slug, status])

    const getProjectByClient = useCallback(() => {
        set("slug", "client")
        dispatch(getProjectAsClient({ userIn: 'yusdion3007@gmail.com', status: status }))
    }, [slug, status])

    return {
        getProjectByWorker,
        getProjectByClient,
        set,
        projectList: transaction.project,
        slug
    }
}