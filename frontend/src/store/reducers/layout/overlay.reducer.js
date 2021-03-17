import * as Actions from "store/actions"

const initialState = {
  isVisible: false
}

const overlay = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SHOW_OVERLAY: {
      console.log("show overlay...")
      
      return {
        isVisible: true,
      }
    }
    case Actions.HIDE_OVERLAY: {
      return {
        isVisible: false,
      }
    }
    default: {
      return state
    }
  }
}

export default overlay
