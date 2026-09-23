import { createContext, useContext, useState, useEffect } from 'react'
import axios from "axios"

const AuthContext = createContext()

export function useAuthContext() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider")
    }

    return context
}

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    const [loading, setLoading] = useState(true) // session restore ho raha hai ya nahi

    useEffect(() => {
        async function restoreSession() {
            try {
                const response = await axios.post(
                    "http://localhost:5173/api/auth/refresh",
                    {},
                    { withCredentials: true } // cookie automatically jaayegi
                )
                setAccessToken(response.data.accessToken)

                // accessToken milte hi user data bhi fetch karo
                const meResponse = await axios.get(
                    "http://localhost:5173/api/auth/profile",
                    {
                        headers: { Authorization: `Bearer ${response.data.accessToken}` },
                        withCredentials: true,
                    }
                )
                setUser(meResponse.data.data.user)
            } catch (error) {
                // refresh token bhi invalid/expired — user logged out hi rahega
                setUser(null)
                setAccessToken(null)
            } finally {
                setLoading(false)
            }
        }

        restoreSession()
    }, [])

    if (loading) {
        return <div>Loading...</div> // ya koi spinner/skeleton
    }

    return (
        <AuthContext.Provider value={{ user, setUser, accessToken, setAccessToken }}>
            {children}
        </AuthContext.Provider>
    )
}