import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveTransaction, getApproveTransaction, getRejectTransaction } from "../../../redux/cms/transactionManagement";
import { useQueryParams } from "../../../shared";

export const useTransactionManagement = () => {
    const dispatch = useDispatch()
    const { set, status, slug, tab } = useQueryParams();
    const transactionManagement = useSelector((state: any) => state.transactionManagement)

    useEffect(() => {
        if (transactionManagement.resultCode !== 200 && tab === 'active') {
            dispatch(getRejectTransaction({ userIn: 'yusdion3007@gmail.com', id: slug }))
        } else if (transactionManagement.resultCode !== 200 && tab === 'approve') {
            dispatch(getApproveTransaction({ userIn: 'yusdion3007@gmail.com', id: slug }))
        } else {
            dispatch(getActiveTransaction({ userIn: 'yusdion3007@gmail.com', status: status }))
        }
    }, [transactionManagement.transactions, status])

    return [{ transactionManagementList: transactionManagement.transactions }, { set }]
}