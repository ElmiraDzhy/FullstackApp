import ACTION_TYPES from "../actions/types";
import {createReducer} from "@reduxjs/toolkit";

const initialState = null;

const userReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(ACTION_TYPES.LOGIN_USER_SUCCESS, (state, action) => {
            return action.payload
        })
        .addCase(ACTION_TYPES.SIGNUP_USER_SUCCESS, (state, action) => {
            return action.payload
        })
        .addCase(ACTION_TYPES.UPDATE_USER_SUCCESS, (state, action) => {
            return action.payload
        })
        .addCase(ACTION_TYPES.GET_USER_SUCCESS, (state, action) => {
            return action.payload.user
        })
        .addCase(ACTION_TYPES.LOGOUT, (state, action) => {
            return initialState
        })
        .addDefaultCase((state, action) => state);
})

export default userReducer;