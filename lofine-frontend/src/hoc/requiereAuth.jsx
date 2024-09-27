import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useauth'


export default function RequireAuth({children}) {
    const {user} = useAuth()
    

    if (user) {
        return children
    }

    return <Navigate to='/login' />
}