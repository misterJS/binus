import { ActivityCurved, ChatCurved, DocumentCurved, ImageCurved, InfoCircleCurved, PaperCurved, TwoUsersCurved } from '../../../assets/icon-sidebar';

export const useCms = () => {
    const menu = [
        {
            name: 'User Management',
            icon: <TwoUsersCurved />,
            url: '/user-management'
        },
        {
            name: 'Ranking Management',
            icon: <ActivityCurved />,
            url: '/ranking-management'
        },
        {
            name: 'Transaction Management',
            icon: <PaperCurved />,
            url: '/transaction-management'
        },
        {
            name: 'Go Buzz',
            icon: <ChatCurved />,
            url: '/chat'
        },
        {
            name: 'Report',
            icon: <DocumentCurved />,
            url: '/garden'
        },
        {
            name: 'Violation Report',
            icon: <InfoCircleCurved />,
            url: '/garden'
        },
        {
            name: 'Banner Setting',
            icon: <ImageCurved />,
            url: '/garden'
        },
    ]

    return (
        menu
    )
}