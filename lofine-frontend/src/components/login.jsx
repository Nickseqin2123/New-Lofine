import axios from "axios"
import LoginForm from "../forms/loginForm"
import { useState } from "react"
import useAuth from "../hooks/useauth"
import getUserProfile from './getUserForProfile'
import { Navigate, useNavigate } from "react-router-dom"


export default function Login() {
    const {setUser} = useAuth()
    const navig = useNavigate()
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    function change(target) {
        setForm({...form, 
            [target.name]: target.value})
    }

    async function loginOnServer(event) {
        event.preventDefault()

        const {username, password} = form

        if (Boolean(username) & Boolean(password)) {
            const normalform = {
                'username': username,
                'password': password
            }

            const response = axios.post('http://127.0.0.1:8000/api/v8/token/login/', normalform)
            const {access, refresh} = (await response).data

            localStorage.setItem('access', access)
            localStorage.getItem('refresh', refresh)

            const user = await getUserProfile()
            setUser(user)
            
            navig('/profile')

        } else {
            alert('Вы ничего не ввели')
        }
    }


    return <>
    <LoginForm values={form} sett={change} subm={loginOnServer}/>
    </>
}