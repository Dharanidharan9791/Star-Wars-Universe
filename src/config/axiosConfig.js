import axios from 'axios'

// Create an axios instance with a base URL for the SWAPI
const axiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api',
})

// Add request interceptors to handle configurations or logging
axiosInstance.interceptors.request.use(
    (config) => {
        // Modify or log the request configuration if needed
        return config
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error)
    }
)

export default axiosInstance