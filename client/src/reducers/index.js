import ACTION_TYPES from './../actions/types';
import {combineReducers} from "redux";
import {chat} from "./chatReducer";
import {user} from "./userReducer";

const initialState = {
    user: null,
    chatList: [],
    currentChat: null,
    isFetching: false,
    errors: null,
    modalWindow: false,
}

const rootReducer = combineReducers({
    user,
    chat,
});

export default rootReducer;