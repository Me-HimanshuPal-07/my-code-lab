import axios from "axios"
import { useAuthContext } from "../auth/context/AuthProvider"
import { useEffect } from "react"

const api = axios.create({
    baseURL: "http://localhost:5173/api",
    withCredentials: true,
})

const useApi = () => {
    const { accessToken } = useAuthContext()

    useEffect(() => {
        const interceptorId = api.interceptors.request.use((config) => {
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`
            }
            return config
        })

        return () => {
            api.interceptors.request.eject(interceptorId)
        }
    }, [accessToken])

    return api
}

export default useApi