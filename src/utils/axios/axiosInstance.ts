import axios from 'axios';
import { HOST_API_KEY } from '../constants/app';

const axiosInstance = axios.create({
    baseURL: HOST_API_KEY,
    // headers
});

export default axiosInstance;
