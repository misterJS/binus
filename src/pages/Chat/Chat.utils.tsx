import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useQueryParams } from '../../shared'
import { getMessage, getMessageList, postMessage } from "../../store/client"

export const useChatSetup = () => {
    const dispatch = useDispatch()
    const { page, perPage } = useQueryParams()
    // const navigate = useNavigate()

    const messages = useSelector((state: any) => state.client.chat.messageByUser)
    const messagesLists = useSelector((state: any) => state.client.chat.messageList)
    // const loading = useSelector((state: any) => state.client.chat.loading)


    useEffect(() => {
        if (!messagesLists) {
            dispatch(getMessage({ page: page, perPage: perPage }))
        }
    }, [messagesLists])

    const postMessageParam = (message: any) => {
        dispatch(postMessage({ message: message }))
    }

    return {
        postMessageParam,
        messageList: messages,
        messagesLists
    }
}