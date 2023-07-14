import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from './../actions/types';
import * as CHAT_SAGA_WORKERS from './chatSaga';
import * as USER_SAGA_WORKERS from './userSaga';

function* rootSaga () {
    //users sagas
    yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, USER_SAGA_WORKERS.loginUserSaga);
    yield takeLatest(ACTION_TYPES.SIGNUP_USER_REQUEST, USER_SAGA_WORKERS.signUpUserSaga);
    yield takeLatest(ACTION_TYPES.GET_USER_REQUEST, USER_SAGA_WORKERS.getUserDataSaga);
    yield takeLatest(ACTION_TYPES.UPDATE_USER_REQUEST, USER_SAGA_WORKERS.updateUserSaga);
    yield takeLatest(ACTION_TYPES.LOGOUT, USER_SAGA_WORKERS.logOutSaga);

    //chats sagas
    yield takeLatest(ACTION_TYPES.ADD_MESSAGE_REQUEST, CHAT_SAGA_WORKERS.addMessageSaga);
    yield takeLatest(ACTION_TYPES.DELETE_MESSAGE_REQUEST, CHAT_SAGA_WORKERS.deleteMessageSaga);
    yield takeLatest(ACTION_TYPES.DELETE_CHAT_REQUEST, CHAT_SAGA_WORKERS.deleteChatSaga);
    yield takeLatest(ACTION_TYPES.GET_ALL_USER_CHATS_REQUEST, CHAT_SAGA_WORKERS.getAllChatsSaga);
    yield takeLatest(ACTION_TYPES.GET_CURRENT_CHAT_REQUEST, CHAT_SAGA_WORKERS.getCurrentChatWithMessages);
    yield takeLatest(ACTION_TYPES.CREATE_NEW_CHAT_REQUEST, CHAT_SAGA_WORKERS.createNewChatSaga);
}

export default rootSaga;