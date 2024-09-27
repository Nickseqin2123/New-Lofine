import { useContext } from "react"
import { AuthContext } from '../hoc/provider'


export default function useAuth() {
    return useContext(AuthContext)
}