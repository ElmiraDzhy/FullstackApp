import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from './../actions/types';
import {addMessageSaga} from './chatSaga';
import {loginUserSaga, signUpUserSaga} from './userSaga';

function* rootSaga () {
    //users sagas
    yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga)
    yield takeLatest(ACTION_TYPES.SIGNUP_USER_REQUEST, signUpUserSaga)

    //chats sagas
    yield takeLatest(ACTION_TYPES.ADD_MESSAGE_REQUEST, addMessageSaga);
}

export default rootSaga;