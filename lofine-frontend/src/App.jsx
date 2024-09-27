import { Routes, Route } from "react-router-dom";
import GetUser from "./components/getuser";
import Register from './components/register'
import Profile from './components/profile'
import RequireAuth from './hoc/requiereAuth'
import MainPage from './components/mainpage'
import {AuthProvider} from "./hoc/provider";
import Login from "./components/login";
import Chat from "./components/chat/chat";
import RegistartionForm from "./forms/registrationForm";


export default function Start() {
    return (
    <AuthProvider>
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="getuser" element={<GetUser />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="registration" element={<RegistartionForm/>}></Route>
            <Route path="profile" element=
            {
                    <RequireAuth>
                        <Profile />
                    </RequireAuth>
            }>
            
            </Route>
            <Route path="chat" element=
            {
                <RequireAuth>
                    <Chat />
                </RequireAuth>
            }>
            </Route>
        </Routes>
    </AuthProvider>
    )
}