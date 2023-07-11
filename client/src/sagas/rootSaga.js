import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from './../actions/types';
import {addMessageSaga, getAllChatsSaga, getCurrentChatWithMessages} from './chatSaga';
import {loginUserSaga, signUpUserSaga, getUserDataSaga, updateUserSaga, logOutSaga} from './userSaga';

function* rootSaga () {
    //users sagas
    yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga);
    yield takeLatest(ACTION_TYPES.SIGNUP_USER_REQUEST, signUpUserSaga);
    yield takeLatest(ACTION_TYPES.GET_USER_REQUEST, getUserDataSaga);
    yield takeLatest(ACTION_TYPES.UPDATE_USER_REQUEST, updateUserSaga);
    yield takeLatest(ACTION_TYPES.LOGOUT, logOutSaga)
    //chats sagas
    yield takeLatest(ACTION_TYPES.ADD_MESSAGE_REQUEST, addMessageSaga);
    yield takeLatest(ACTION_TYPES.GET_ALL_USER_CHATS_REQUEST, getAllChatsSaga);
    yield takeLatest(ACTION_TYPES.GET_CURRENT_CHAT_REQUEST, getCurrentChatWithMessages);
}

export default rootSaga;