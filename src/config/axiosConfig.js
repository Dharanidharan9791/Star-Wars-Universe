import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api',
})

axiosInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance