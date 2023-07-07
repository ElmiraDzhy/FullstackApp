import ACTION_TYPES from './types';

export const addMessage = (payload) => ({
    type: ACTION_TYPES.ADD_MESSAGE,
    payload
});