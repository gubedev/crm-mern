import { put, takeLatest, call } from 'redux-saga/effects';
import accountService from "../../../services/accountService";
import {
    SIGNIN,
    SIGNIN_SUCCESS,
    SIGNIN_ERROR
}
    from "../../actions/account";

function* signInSaga(action) {
    try {
        const data = yield call(accountService.login, action.payload);
        yield put ({
            type: SIGNIN_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: SIGNIN_ERROR, 
            error: error.data.error.message
        });
    }
}

export function* signInWatcher() {
    yield takeLatest(SIGNIN, signInSaga);
}