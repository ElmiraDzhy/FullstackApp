import {put} from 'redux-saga/effects';
import {addMessage} from '../api';
import {addMessageSuccess, addMessageError} from "../actions/actionCreators";

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
