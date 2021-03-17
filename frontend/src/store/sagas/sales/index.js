import { all } from "redux-saga/effects"
import { searchSalesWatcher } from "./sales.saga"

export default function* salesSaga() {
  yield all([searchSalesWatcher()])
}
