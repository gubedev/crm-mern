import { combineReducers } from "redux"
import accounts from "./accounts"
import layout from "./layout"
import dashboard from "./dashboard"
import sales from "./sales"

const createReducer = asyncReducers =>
  combineReducers({
    accounts,
    layout,
    dashboard,
    sales,
    ...asyncReducers,
  })

export default createReducer
