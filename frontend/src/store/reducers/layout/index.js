import { combineReducers } from "redux"
import sidebar from "./sidebar.reducer"
import overlay from "./overlay.reducer"

const layout = combineReducers({
  sidebar,
  overlay
})

export default layout
