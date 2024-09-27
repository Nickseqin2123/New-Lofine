import { useState } from "react";
import GetUserForm from "../forms/getUserForm";
import axios from "axios";


export default function GetUser() {
    const [value, setValue] = useState('')
    const [user, setUser] = useState(null)

    async function getUser(event) {
        event.preventDefault()

        if (Boolean(value) & !isNaN(value)) {
            const response = axios.get(`http://127.0.0.1:8000/api/v8/user/${value}/`)
            const data = (await response).data
            setUser(data[0]? data[0]: -1)
            setValue('')
        }
        else {
            alert('Вы ничего не ввели')
        }
    }
    function func() {
        if (user == -1) {
            return <h1>Пользователь не найден</h1>
        }
        return (
            <div className="info">
                <h1>ID: {user.id}</h1>
                <h1>Имя: {user.first_name}</h1>
                <h1>Тег: {user.tag_user}</h1>
                <h1>Почта: {user.email}</h1>
                <h1>Номер телефона: {user.telephone_number}</h1>
            </div>
        )
    }

    return (
    <>
    <GetUserForm value={value} vlsSet={setValue} subm={getUser}/>
    <div className="userInfo" style={{ textAlign:'center' }}>
    {user ? func() : <h1>Введите ID пользователя</h1>}
    </div>
    </>
    )
}