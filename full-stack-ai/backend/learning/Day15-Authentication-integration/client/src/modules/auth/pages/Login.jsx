import React, { useState } from 'react'
import useApi from "../../shared/useApi"
import { useAuthContext } from "../context/AuthProvider"
import { useNavigate } from "react-router"

const Login = () => {
    const api = useApi()
    const authContext = useAuthContext()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const response = await api.post('/auth/login', { email, password })
            authContext.setAccessToken(response.data.accessToken)
            authContext.setUser(response.data.data.user)
            navigate("/profile")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main>
            <form className='flex-col gap-4' onSubmit={handleSubmit}>
                <input type="email"
                    className='border p-2 rounded-sm'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
                />
                <input type="password"
                    className='border p-2 rounded-sm'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <button type="submit" className='border p-2 bg-blue-200 rounded-sm'>Login</button>
            </form>
        </main>
    )
}

export default Login