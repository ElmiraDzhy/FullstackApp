import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:5000/api',
}); //create instance

// auth api

export const signIn = async (userData) => await httpClient.post('/users/sign-in', userData);
export const signUp = async (userData) => await httpClient.post('/users/sign-up', userData);
export const getUserData = async () => await httpClient.get('/users/');
export const deleteUser = async () => await httpClient.delete('/users/');
export const logOut = async () => {
    localStorage.clear();
};

export const refreshSession = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    const data = await httpClient.post('/users/refresh', {refreshToken});
    console.log(data)
    return data;
};

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

httpClient.interceptors.response.use(
    (response) => {
        //success handler - if 100 - 200 - 300 status codes
        //if there are tokens in success response - we need to save it in localStorage
        if (response.data.tokens) {
            const {data: {tokens: {accessToken, refreshToken}}} = response;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
        }
        return response;
    },
    (error) => {
        //error handler - if 400 - 500 status codes
        //if 401 - re-authorization
        //if 403 and into localStorage is refreshToken - do refresh session
        if (error.response.status === 403 && localStorage.getItem('refreshToken')) {
            // refresh session
            console.log('REFRESH');
            return refreshSession()
                .then(() => {
                    // when request for refresh session will back - we need to do user request one more time
                    return httpClient(error.const);
                });
        }
        else if (error.response.status === 401) {
            // back into authorization page
             logOut()
        }
        else {
            return Promise.reject(error);
        }
    });

// chat api
// todo: fix this api:
export const createChat = async (chatData) => await httpClient.post('/chats/', chatData);
export const addMessage = async ({body, chatId}) => await httpClient.post(`/chats/${chatId}`, body);
export const getChatWithMembers = async () => await httpClient.get('/chats/users', {});
export const getCurrentChat = async () => await httpClient.get('/chats/', {});
export const addUserToChat = async (chatId) => await httpClient.put(`/${chatId}/`, {});
export const getUserChats = async () => await httpClient.get('/chats/all', {});

