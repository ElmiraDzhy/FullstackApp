import ACTION_TYPES from './types';
import {createAction} from "@reduxjs/toolkit";

//
//USERS
//
export const loginUserRequest = createAction(ACTION_TYPES.LOGIN_USER_REQUEST);
export const loginUserSuccess = createAction(ACTION_TYPES.LOGIN_USER_SUCCESS);
export const loginUserError = createAction(ACTION_TYPES.LOGIN_USER_ERROR);

export const signUpUserRequest = createAction(ACTION_TYPES.SIGNUP_USER_REQUEST);
export const signUpUserSuccess = createAction(ACTION_TYPES.SIGNUP_USER_SUCCESS);
export const signUpUserError = createAction(ACTION_TYPES.SIGNUP_USER_ERROR);

export const getUserDataRequest = createAction(ACTION_TYPES.GET_USER_REQUEST);
export const getUserDataSuccess = createAction(ACTION_TYPES.GET_USER_SUCCESS);
export const getUserDataError = createAction(ACTION_TYPES.GET_USER_ERROR);

export const updateUserRequest = createAction(ACTION_TYPES.UPDATE_USER_REQUEST);
export const updateUserSuccess = createAction(ACTION_TYPES.UPDATE_USER_SUCCESS);
export const updateUserError = createAction(ACTION_TYPES.UPDATE_USER_ERROR);

export const logOut  = createAction(ACTION_TYPES.LOGOUT);

//
//CHATS
//
export const addMessageRequest = createAction(ACTION_TYPES.ADD_MESSAGE_REQUEST);
export const addMessageSuccess = createAction(ACTION_TYPES.ADD_MESSAGE_SUCCESS);
export const addMessageError = createAction(ACTION_TYPES.ADD_MESSAGE_ERROR);

export const getAllUserChatRequest = createAction(ACTION_TYPES.GET_ALL_USER_CHATS_REQUEST);
export const getAllUserChatSuccess = createAction(ACTION_TYPES.GET_ALL_USER_CHATS_SUCCESS);
export const getAllUserChatError = createAction(ACTION_TYPES.GET_ALL_USER_CHATS_ERROR);

export const getCurrentChatRequest = createAction(ACTION_TYPES.GET_CURRENT_CHAT_REQUEST);
export const getCurrentChatSuccess = createAction(ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS);
export const getCurrentChatError = createAction(ACTION_TYPES.GET_CURRENT_CHAT_ERROR);

export const createNewChatRequest = createAction(ACTION_TYPES.CREATE_NEW_CHAT_REQUEST);
export const createNewChatSuccess = createAction(ACTION_TYPES.CREATE_NEW_CHAT_SUCCESS);
export const createNewChatError = createAction(ACTION_TYPES.CREATE_NEW_CHAT_ERROR);

export const deleteMessageRequest = createAction(ACTION_TYPES.DELETE_MESSAGE_REQUEST);
export const deleteMessageSuccess = createAction(ACTION_TYPES.DELETE_MESSAGE_SUCCESS);
export const deleteMessageError = createAction(ACTION_TYPES.DELETE_MESSAGE_ERROR);