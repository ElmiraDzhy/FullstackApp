import * as API from '../api';
import {put} from 'redux-saga/effects';
import * as actionCreators from "../actions/actionCreators";
import {ca} from "date-fns/locale";

export function* loginUserSaga (action) {
    try {
        const {data: {data}} = yield API.signIn(action.payload);
        const action = actionCreators.loginUserSuccess(data);
        yield put(action);
    } catch (err) {
        const errorAction = actionCreators.loginUserError(err);
        yield put(errorAction);
    }
}

export function* signUpUserSaga (action) {
    try {
        const {data: {data}} = yield API.signUp(action.payload);
        const action = actionCreators.signUpUserSuccess(data);
        yield put(action);
    } catch (err) {
        yield put(actionCreators.signUpUserError(err));
    }
}

export function* getUserData () {

}

export function* deleteUser () {

}