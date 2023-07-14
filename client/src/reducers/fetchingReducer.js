import ACTION_TYPES from "../actions/types";

const initialState = false;


function fetchingReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_MESSAGE_REQUEST:
        case ACTION_TYPES.GET_ALL_USER_CHATS_REQUEST:
        case ACTION_TYPES.GET_CURRENT_CHAT_REQUEST:
        case ACTION_TYPES.CREATE_NEW_CHAT_REQUEST:
        case ACTION_TYPES.GET_USER_REQUEST:
        case ACTION_TYPES.LOGIN_USER_REQUEST:
        case ACTION_TYPES.SIGNUP_USER_REQUEST:
        case ACTION_TYPES.UPDATE_USER_REQUEST:
            return true;
        case ACTION_TYPES.ADD_MESSAGE_ERROR:
        case ACTION_TYPES.ADD_MESSAGE_SUCCESS:
        case ACTION_TYPES.GET_ALL_USER_CHATS_SUCCESS:
        case ACTION_TYPES.GET_ALL_USER_CHATS_ERROR:
        case ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS:
        case ACTION_TYPES.GET_CURRENT_CHAT_ERROR:
        case ACTION_TYPES.CREATE_NEW_CHAT_SUCCESS:
        case ACTION_TYPES.CREATE_NEW_CHAT_ERROR:
        case ACTION_TYPES.LOGIN_USER_SUCCESS:
        case ACTION_TYPES.LOGIN_USER_ERROR:
        case ACTION_TYPES.SIGNUP_USER_SUCCESS:
        case ACTION_TYPES.SIGNUP_USER_ERROR:
        case ACTION_TYPES.GET_USER_SUCCESS:
        case ACTION_TYPES.GET_USER_ERROR:
        case ACTION_TYPES.UPDATE_USER_SUCCESS:
        case ACTION_TYPES.UPDATE_USER_ERROR:
            return false;
        case ACTION_TYPES.LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default fetchingReducer;