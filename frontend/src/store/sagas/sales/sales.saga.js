import { 
  put, 
  takeLatest, 
  call 
} from "redux-saga/effects"
import { search } from "api"
import { 
  SEARCH_SALES, 
  SEARCH_SALES_SUCCESS, 
  SEARCH_SALES_ERROR 
} from "store/actions"

function* searchSalesSaga(action) {
  try {
    const data = yield call(search, action.payload)
    yield put({
      type: SEARCH_SALES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    yield put({
      type: SEARCH_SALES_ERROR,
      error: error.data.error.message,
    })
  }
}

export function* searchSalesWatcher() {
  yield takeLatest(SEARCH_SALES, searchSalesSaga)
}
