import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api'
});


axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status in [401, 400]) {
            localStorage.removeItem('token');
            window.location.href = '/auth';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;


