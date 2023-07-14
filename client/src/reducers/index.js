import {combineReducers} from "redux";
import currentChatReducer from "./currentChatReducer";
import userReducer from './userReducer';
import chatListReducer from "./chatListReducer";
import fetchingReducer from './fetchingReducer';
import errorReducer from './errorReducer';


const rootReducer = combineReducers({
    user: userReducer,
    currentChat: currentChatReducer,
    chatList: chatListReducer,
    isFetching: fetchingReducer,
    error: errorReducer,
});
export default rootReducer;