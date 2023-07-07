import * as API from '../api';
import {put} from 'redux-saga/effects';
import * as actionCreators from "../actions/actionCreators";
import history from "../history";

export function* loginUserSaga (action) {
    try {
        const {data: {data}} = yield API.signIn(action.payload);
        yield put(actionCreators.loginUserSuccess(data));
        history.push('/messenger');
    } catch (err) {
        const errorAction = actionCreators.loginUserError(err);
        yield put(errorAction);
    }
}

export function* signUpUserSaga (action) {
    try {
        const {data: {data}} = yield API.signUp(action.payload);
        yield put(actionCreators.signUpUserSuccess(data));
        history.push('/messenger');

    } catch (err) {
        yield put(actionCreators.signUpUserError(err));
    }
}

export function* getUserData () {

}

export function* deleteUser () {

}