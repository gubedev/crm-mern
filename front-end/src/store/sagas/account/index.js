import { all } from 'redux-saga/effects';
import { signInWatcher } from './signin.saga';

export default function* signInSaga() {
    yield all([
        signInWatcher()
    ]);
}