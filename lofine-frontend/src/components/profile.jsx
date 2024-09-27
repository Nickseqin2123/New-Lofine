import useAuth from "../hooks/useauth"
import { Link } from "react-router-dom"


export default function Profile() {
    const {user} = useAuth()

    return (
        <>
        <div className="info" style={{ textAlign: 'center', marginTop: '12rem' }}>
            <h1>Профиль пользователя {user.first_name}</h1>
            <h1>ID: {user.id}</h1>
            <h1>Имя: {user.first_name}</h1>
            <h1>Тег: {user.tag_user}</h1>
            <h1>Почта: {user.email}</h1>
            <h1>Номер телефона: {user.telephone_number}</h1>
            <button style={{ fontSize: '40px', width: "auto" }}>
                <Link to='/chat' style={{ textDecoration: 'none', color: 'black' }}>Чат</Link>
            </button>
        </div>
        </>
    )
}