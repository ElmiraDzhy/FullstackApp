import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from './../actions/types';
import {addMessageSaga, getAllChatsSaga} from './chatSaga';
import {loginUserSaga, signUpUserSaga} from './userSaga';

function* rootSaga () {
    //users sagas
    yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga)
    yield takeLatest(ACTION_TYPES.SIGNUP_USER_REQUEST, signUpUserSaga)

    //chats sagas
    yield takeLatest(ACTION_TYPES.ADD_MESSAGE_REQUEST, addMessageSaga);
    yield takeLatest(ACTION_TYPES.GET_ALL_USER_CHATS_REQUEST, getAllChatsSaga);
}

export default rootSaga;