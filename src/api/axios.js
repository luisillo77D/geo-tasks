import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://geotasks-back.onrender.com/api',
    withCredentials:true
})

export default instance