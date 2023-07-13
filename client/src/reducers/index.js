import {combineReducers} from "redux";
import {chat} from "./chatReducer";
import {user} from "./userReducer";


const rootReducer = combineReducers({
    user,
    chat,
});

export default rootReducer;