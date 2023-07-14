import {createReducer} from "@reduxjs/toolkit";
import ACTION_TYPES from '../actions/types';

const initialState = [];

const chatListReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ACTION_TYPES.GET_ALL_USER_CHATS_SUCCESS, (state, action) => {
            return action.payload
        })
        .addCase(ACTION_TYPES.GET_USER_SUCCESS, (state, action) => {
            return action.payload.chatList
        })
        .addCase(ACTION_TYPES.LOGOUT, (state, action) => {
            return initialState
        })
        .addCase(ACTION_TYPES.CREATE_NEW_CHAT_SUCCESS, (state, action) => {
            return action.payload
        })
        .addCase(ACTION_TYPES.DELETE_CHAT_SUCCESS, (state, action) => {
            return action.payload
        })
        .addDefaultCase((state, action) => state)
})

export default chatListReducer;