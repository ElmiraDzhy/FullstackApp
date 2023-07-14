import {createReducer} from "@reduxjs/toolkit";
import ACTION_TYPES from '../actions/types';

const initialState = null

const errorReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ACTION_TYPES.ADD_MESSAGE_ERROR, (state, action) => action.payload)
        .addCase(ACTION_TYPES.GET_ALL_USER_CHATS_ERROR, (state, action) => action.payload)
        .addCase(ACTION_TYPES.GET_CURRENT_CHAT_ERROR, (state, action) => action.payload)
        .addCase(ACTION_TYPES.CREATE_NEW_CHAT_ERROR, (state, action) => action.payload)
        .addCase(ACTION_TYPES.DELETE_MESSAGE_ERROR, (state, action) => action.payload)
        .addCase(ACTION_TYPES.LOGIN_USER_ERROR, (state, action) => action.payload)
        .addCase(ACTION_TYPES.SIGNUP_USER_ERROR, (state, action) => action.payload)
        .addCase(ACTION_TYPES.GET_USER_ERROR, (state, action) => action.payload)
        .addCase(ACTION_TYPES.UPDATE_USER_ERROR, (state, action) => action.payload)
        .addDefaultCase((state, action) => initialState);
});


export default errorReducer;