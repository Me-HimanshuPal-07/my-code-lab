import axios from "axios"
import { useAuthContext } from  "../auth/context/AuthProvider"

const api = axios.create({
    baseURL: "http://localhost:5173/api",
    withCredentials: true, 
})

const useApi = ()=> {

    const { accessToken } = useAuthContext()

    api.interceptors.request.use(
        (config)=>{
            if (accessToken){
                config.headers.Authorization = `Bearer ${accessToken}`
            }
            return config
        },

        (error) => {
            return Promise.reject(error)
        }
    )
    return api
}

export default useApi