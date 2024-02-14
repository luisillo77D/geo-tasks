import { useAuth } from "./context/AuthContext"
import {Navigate, Outlet} from 'react-router-dom';

function ProtectedRoute() {
    const {user} = useAuth()
    if(!user.role) return <Navigate to='/' replace/>
  return (
    <Outlet/>
  )
}

export default ProtectedRoute