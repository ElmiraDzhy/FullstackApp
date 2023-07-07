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
        case ACTION_TYPES.ADD_MESSAGE_REQUEST: {
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
        case ACTION_TYPES.SIGNUP_USER_ERROR: {
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


        //

        //
        default: {
            return {...state}
        }
    }
}


export default rootReducer;