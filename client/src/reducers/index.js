import ACTION_TYPES from './../actions/types';

const initialState = {
    user: null,
    chatList: [],
    currentChat: null,
    isFetching: false,
    errors: null
}

function rootReducer (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        //
        case ACTION_TYPES.ADD_MESSAGE_REQUEST:
        case ACTION_TYPES.GET_ALL_USER_CHATS_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        //
        case ACTION_TYPES.ADD_MESSAGE_SUCCESS: {
            return {
                ...state,
                currentChat: {
                    ...state.currentChat,
                    messages: state.currentChat.messages.concat(action.data)
                }
            }
        }
        //
        case ACTION_TYPES.ADD_MESSAGE_ERROR:
        case ACTION_TYPES.LOGIN_USER_ERROR :
        case ACTION_TYPES.SIGNUP_USER_ERROR:
        case ACTION_TYPES.GET_ALL_USER_CHATS_ERROR:{
            return {
                ...state,
                errors: action.error
            }
        }
        //
        case ACTION_TYPES.LOGIN_USER_SUCCESS:
        case ACTION_TYPES.SIGNUP_USER_SUCCESS: {
            return {
                ...state,
                user: action.data
            }
        }
        //
        case ACTION_TYPES.GET_ALL_USER_CHATS_SUCCESS: {
            return {
                ...state,
                chatList: action.data
            }
        }

        //

        //
        default: {
            return {...state}
        }
    }
}


export default rootReducer;