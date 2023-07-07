import ACTION_TYPES from './types';

//users
export const loginUserRequest = (payload) => ({
    type: ACTION_TYPES.LOGIN_USER_REQUEST,
    payload
});

export const loginUserSuccess = (payload) => ({
    type: ACTION_TYPES.LOGIN_USER_SUCCESS,
    payload
});

export const loginUserError = (payload) => ({
    type: ACTION_TYPES.LOGIN_USER_ERROR,
    payload
});

export const signUpUserRequest = (payload) => ({
    type: ACTION_TYPES.SIGNUP_USER_REQUEST,
    payload
});

export const signUpUserSuccess = (payload) => ({
    type: ACTION_TYPES.SIGNUP_USER_SUCCESS,
    payload
});

export const signUpUserError= (payload) => ({
    type: ACTION_TYPES.SIGNUP_USER_ERROR,
    payload
});

//chats
export const addMessageRequest = (payload) => ({
    type: ACTION_TYPES.ADD_MESSAGE_REQUEST,
    payload
});

export const addMessageSuccess = (data) => ({
    type: ACTION_TYPES.ADD_MESSAGE_SUCCESS,
    data
});

export const addMessageError = (error) => ({
    type: ACTION_TYPES.ADD_MESSAGE_ERROR,
    error
});