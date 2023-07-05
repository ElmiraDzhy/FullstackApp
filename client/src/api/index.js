import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:5000/api',
}); //create instance

export const signIn = async (userData) => await httpClient.post('/users/sign-in', userData);
export const signUp = async (userData) => await httpClient.post('/users/sign-up', userData);
export const getUserChats = async () => await httpClient.get('/chats/all', {

});

httpClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`
            }
        }
        return config;
    },
    (error) => Promise.reject(error));
