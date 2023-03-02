import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getMessage, getMessageList, postMessage } from "../../redux/goBuzz"

export const useChatSetup = () => {
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const messages = useSelector((state: any) => state.goBuzz.messageByUser)
    const messagesLists = useSelector((state: any) => state.goBuzz.messageList)
    const loading = useSelector((state: any) => state.goBuzz.loading)


    useEffect(() => {
        if (!messagesLists) {
            dispatch(getMessage())
            dispatch(getMessageList())
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