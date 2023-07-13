import ACTION_TYPES from "../actions/types";

const initialState = {
    chatList: [],
    currentChat: null,
    isFetching: false,
    errors: null,

}
export function chat (state=initialState, action){
    console.log(action)
    switch (action.type) {
        //
        case ACTION_TYPES.ADD_MESSAGE_REQUEST:
        case ACTION_TYPES.GET_CURRENT_CHAT_REQUEST:
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
        case ACTION_TYPES.CREATE_NEW_CHAT_ERROR:
        case ACTION_TYPES.GET_ALL_USER_CHATS_ERROR:
        case ACTION_TYPES.GET_CURRENT_CHAT_ERROR: {
            return {
                ...state,
                errors: action.error
            }
        }
        //
        case ACTION_TYPES.CREATE_NEW_CHAT_SUCCESS:
        case ACTION_TYPES.GET_ALL_USER_CHATS_SUCCESS: {
            return {
                ...state,
                chatList: action.data,
                isFetching: false
            }
        }
        //
        case ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS: {
            return{
                ...state,
                currentChat: action.data
            }
        }
        //
        default: {
            return {...state}
        }
    }
}