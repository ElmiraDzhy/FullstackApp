import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from './../actions/types';
import {addMessageSaga} from './chatSaga';
function* rootSaga () {
 takeLatest(ACTION_TYPES.ADD_MESSAGE_REQUEST, addMessageSaga);
}
export default rootSaga;