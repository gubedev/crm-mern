import { all } from "redux-saga/effects"
import accountsSaga from "./accounts"
import dashboardSaga from "./dashboard"
import salesSaga from "./sales"

export default function* rootSaga() {
  yield all([accountsSaga(), dashboardSaga(), salesSaga()])
}
