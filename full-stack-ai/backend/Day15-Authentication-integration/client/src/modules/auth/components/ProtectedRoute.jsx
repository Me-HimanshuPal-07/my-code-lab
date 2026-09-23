import { useAuthContext } from "../context/AuthProvider"
import { Navigate } from "react-router"

const ProtectedRoute = ({ children }) => {
    const { accessToken } = useAuthContext()

    if (!accessToken) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute