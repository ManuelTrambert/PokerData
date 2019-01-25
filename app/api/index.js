import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3000',
});

export const setAuthToken = (token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const unsetAuthToken = () => {
    delete instance.defaults.headers.common['Authorization'];
}

export default instance;
