import ACTION_TYPES from './types';

//users
export const loginUserRequest = (payload) => ({
    type: ACTION_TYPES.LOGIN_USER_REQUEST,
    payload
});

export const loginUserSuccess = (data) => ({
    type: ACTION_TYPES.LOGIN_USER_SUCCESS,
    data
});

export const loginUserError = (error) => ({
    type: ACTION_TYPES.LOGIN_USER_ERROR,
    error
});

export const signUpUserRequest = (payload) => ({
    type: ACTION_TYPES.SIGNUP_USER_REQUEST,
    payload
});

export const signUpUserSuccess = (data) => ({
    type: ACTION_TYPES.SIGNUP_USER_SUCCESS,
    data
});

export const signUpUserError= (error) => ({
    type: ACTION_TYPES.SIGNUP_USER_ERROR,
    error
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

export const getAllUserChatRequest = (payload) => ({
    type: ACTION_TYPES.GET_ALL_USER_CHATS_REQUEST,
    payload
});
export const getAllUserChatSuccess = (data) => ({
    type: ACTION_TYPES.GET_ALL_USER_CHATS_SUCCESS,
    data
});
export const getAllUserChatError = (error) => ({
    type: ACTION_TYPES.GET_ALL_USER_CHATS_ERROR,
    error
});