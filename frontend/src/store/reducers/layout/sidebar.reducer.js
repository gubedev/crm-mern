import * as Actions from "store/actions"

const initialState = {
  isShowingSidebar: false,
}

const sidebar = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SHOW_SIDEBAR: {
      return {
        ...state,
        isShowingSidebar: true,
      }
    }
    case Actions.HIDE_SIDEBAR: {
      return {
        ...state,
        isShowingSidebar: false,
      }
    }
    default: {
      return state
    }
  }
}

export default sidebar
