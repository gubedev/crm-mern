import * as Actions from '../../actions/index';

const initialState = {
    isVisible: false,
};

const overlay = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SHOW_OVERLAY:
            {
                return {
                    isVisible: true
                };
            }
        case Actions.HIDE_OVERLAY:
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

export default overlay;
