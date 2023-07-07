import ACTION_TYPES from './types';

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