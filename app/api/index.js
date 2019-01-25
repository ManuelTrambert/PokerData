import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_URL,
});

export const setAuthToken = (token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const unsetAuthToken = () => {
    delete instance.defaults.headers.common['Authorization'];
}

export default instance;