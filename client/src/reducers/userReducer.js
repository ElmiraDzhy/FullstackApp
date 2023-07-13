import ACTION_TYPES from "../actions/types";

const initialState = {
    user: null,
    isFetching: false,
    errors: null,
}


export function user (state = initialState, action){
    console.log(action)
    switch (action.type) {
        //
        case ACTION_TYPES.GET_USER_REQUEST:{
            return {
                ...state,
                isFetching: true
            }
        }
        //
        case ACTION_TYPES.LOGIN_USER_SUCCESS:
        case ACTION_TYPES.UPDATE_USER_SUCCESS:
        case ACTION_TYPES.SIGNUP_USER_SUCCESS: {
            return {
                ...state,
                user: action.data
            }
        }
        //
        case ACTION_TYPES.GET_USER_SUCCESS:{
            return {
                ...state,
                user: action.data.user,
                chatList: action.data.chatList
            }
        }
        //
        case ACTION_TYPES.LOGOUT:{
            return {
                ...initialState
            }
        }
        //
        case ACTION_TYPES.LOGIN_USER_ERROR :
        case ACTION_TYPES.SIGNUP_USER_ERROR:
        case ACTION_TYPES.GET_USER_ERROR:
        case ACTION_TYPES.UPDATE_USER_ERROR:{
            return {
                ...state,
                errors: action.error
            }
        }
        //
        default: {
            return {...state}
        }
    }
}
