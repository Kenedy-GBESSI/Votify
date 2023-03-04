import axios from "axios";
const axiosClient = axios.create({
    baseURL: 'https://votifyapi.onrender.com'
})

export default axiosClient;