import * as Actions from '../../actions/index';

const initialState = {
    isVisible: false,
};

const toogleProfileDropdown = function (state = initialState, action) {
    switch (action.type) {
        case Actions.TOOGLE_PROFILE_DROPDOWN:
            {
                return {
                    isVisible: !state.isVisible
                };
            }
        default:
            {
                return state;
            }
    }
};

export default toogleProfileDropdown;
