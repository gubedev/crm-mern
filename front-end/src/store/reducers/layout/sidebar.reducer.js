import * as Actions from '../../actions/index';

const initialState = {
    isVisible: false,
};

const sidebar = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SHOW_SIDEBAR:
            {
                return {
                    isVisible: true
                };
            }
        case Actions.HIDE_SIDEBAR:
            {
                return {
                    isVisible: false
                };
            }
        default:
            {
                return state;
            }
    }
};

export default sidebar;
