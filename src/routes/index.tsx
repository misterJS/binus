import { Routes, Route } from "react-router-dom"
import { ForgotPassword } from '../pages/Auth/ForgotPassword/ForgotPassword';
import { Login } from '../pages/Auth/Login';
import { Registration } from '../pages/Auth/Registration';
import { Chat } from '../pages/Chat/Chat';
import Dashboard from '../pages/Dashboard';
import Garden from '../pages/Garden/Garden';
import { JobDetail } from '../pages/Garden/JobDetail';
import { Transaction } from '../pages/Transaction';
import { Profile } from '../pages/User/Profile';
import UserManagement from '../pages/Cms/UserManagement/UserManagement';
import { RankingManagement } from '../pages/Cms/RankingManagement';
import { TransactionManagement } from "../pages/Cms";
import { TransactionDetail } from "../pages/Cms/TransactionManagement/_partials/detail/TransactionDetail";
import { ProjectPost } from "../pages/Transaction/_partials/ProjectPost";
import { EditProfile } from "../pages/User/_partials/EditProfile";
import { Confirmation } from "../pages/Auth/ConfirmationPage/ConfirmationPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="register" element={<Registration />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="chat" element={<Chat />} />
            <Route path="garden" element={<Garden />} />
            <Route path="garden/job-detail" element={<JobDetail />} />
            <Route path="user" element={<Profile />} />
            <Route path="user/edit-profile" element={<EditProfile />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="transaction/post-project" element={<ProjectPost />} />
            <Route path="transaction-management/detail" element={<TransactionDetail />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="ranking-management" element={<RankingManagement />} />
            <Route path="transaction-management" element={<TransactionManagement />} />
        </Routes>
    )
}