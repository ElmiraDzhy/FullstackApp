import {put} from 'redux-saga/effects';
import * as API from '../api';
import * as actionCreators from "../actions/actionCreators";

//saga-worker
export function* addMessageSaga (action) {
    //here is request on server
    try {
        const result = yield API.addMessage(action.payload);
        yield put(actionCreators.addMessageSuccess(result.data.data));
    } catch (err) {
        const errorAction = actionCreators.addMessageError(err);
        yield put(errorAction);
    }
}

export function* deleteMessageSaga (action) {
    try {
        const result = yield API.deleteMessage(action.payload);
        yield put(actionCreators.deleteMessageSuccess(result.data.data));
    } catch (err) {
        const errorAction = actionCreators.deleteMessageError(err);
        yield put(errorAction);
    }
}

export function* getAllChatsSaga (action){
    try{
        const {data: {data}} = yield API.getUserChats();
        yield put(actionCreators.getAllUserChatSuccess(data));
    }catch(err){
        yield put(actionCreators.getAllUserChatError(err));
    }
}

export function* getCurrentChatWithMessages (action){
    try{
        const {data: {data}} = yield API.getCurrentChat(action.payload);
        yield put(actionCreators.getCurrentChatSuccess(data));
    }catch(err){
        yield put(actionCreators.getCurrentChatError(err));
    }
}

export function* createNewChatSaga (action){
    try{
        const {data: {data}} = yield API.createChat(action.payload);
        yield put(actionCreators.createNewChatSuccess(data));
    }catch(err){
        yield put(actionCreators.createNewChatError(err));
    }
}