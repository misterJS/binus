import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveTransaction, getApproveTransaction, getRejectTransaction } from "../../../redux/cms/transactionManagement";
import { useQueryParams } from "../../../shared";

export const useTransactionManagement = () => {
    const dispatch = useDispatch()
    const { set, status, slug, tab } = useQueryParams();
    const transactions = useSelector((state: any) => state.client.transactionManagement.transactions)
    const resultCode = useSelector((state: any) => state.client.transactionManagement.resultCode);

    const setParams = (key: string, value: string) => {
        set(key, value)
    }

    useEffect(() => {
        const action = resultCode !== 200
            ? tab === 'active' ? getRejectTransaction({ userIn: 'yusdion3007@gmail.com', id: slug })
                : getApproveTransaction({ userIn: 'yusdion3007@gmail.com', id: slug })
            : getActiveTransaction({ userIn: 'yusdion3007@gmail.com', status: status });

        dispatch(action);
    }, [transactions, status, tab, resultCode]);

    return {
        transactionManagementList: transactions,
        setParams
    }
}  