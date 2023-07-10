import {put} from 'redux-saga/effects';
import {addMessage, getUserChats, getCurrentChat} from '../api';
import {addMessageSuccess, addMessageError, getAllUserChatSuccess, getAllUserChatError, getCurrentChatSuccess, getCurrentChatError} from "../actions/actionCreators";

//saga-worker
export function* addMessageSaga (action) {
    //here is request on server
    try {
        const result = yield addMessage(action.payload);
        yield put(addMessageSuccess(result.data.data));
    } catch (err) {
        const errorAction = addMessageError(err);
        yield put(errorAction);
    }
}

export function* getAllChatsSaga (action){
    try{
        const {data: {data}} = yield getUserChats();
        yield put(getAllUserChatSuccess(data));
    }catch(err){
        yield put(getAllUserChatError(err));
    }
}

export function* getCurrentChatWithMessages (action){
    try{
        const {data: {data}} = yield getCurrentChat();
        yield put(getCurrentChatSuccess(data));
    }catch(err){
        yield put(getCurrentChatError(err));
    }
}