import { combineReducers } from "redux"
import auth from "./auth.reducer"

const account = combineReducers({
  auth,
})

export default account
