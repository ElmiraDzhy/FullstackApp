import {createReducer} from "@reduxjs/toolkit";
import ACTION_TYPES from '../actions/types';

const initialState = null;

const currentChatReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ACTION_TYPES.ADD_MESSAGE_SUCCESS, (state, action) => {
            state.messages = state.messages.concat(action.payload)
        })
        .addCase(ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS, (state, action) => {
            return action.payload
        })
        .addCase(ACTION_TYPES.DELETE_MESSAGE_SUCCESS, (state, action) => {
            state.messages = action.payload.messages
        })
        .addDefaultCase((state, action) => state);
})

export default currentChatReducer;