import { combineReducers } from "redux"
import salesManage from "./sales.reducer"

const sales = combineReducers({
  salesManage,
})

export default sales
