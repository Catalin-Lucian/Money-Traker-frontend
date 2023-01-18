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
       

        if ([401, 403].includes(error.response.status)) {
            localStorage.removeItem('token');
            window.location.href = '/auth';

            console.log("got here");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;


