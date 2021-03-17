import { all } from "redux-saga/effects"
import { fetchDataWatcher } from "./general.saga"

export default function* dashboardSaga() {
  yield all([fetchDataWatcher()])
}
