import { 
  put, 
  takeLatest, 
  call 
} from "redux-saga/effects"
import { login } from "api"
import { 
  SIGNIN, 
  SIGNIN_SUCCESS, 
  SIGNIN_ERROR 
} from "store/actions"

function* signInSaga(action) {
  try {
    const data = yield call(login, action.payload)
    yield put({
      type: SIGNIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    yield put({
      type: SIGNIN_ERROR,
      error: error.data.error.message,
    })
  }
}

export function* signInWatcher() {
  yield takeLatest(SIGNIN, signInSaga)
}
