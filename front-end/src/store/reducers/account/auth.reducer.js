import * as Actions from '../../actions';

const initialState = {
    data: {},
    isAuthenticated : true,
    loginFailed : false,
    error:{}
    
};

const auth = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SIGNIN:
        {
            return {
                isAuthenticated  : false,
                loginFailed : false,
                error:{}
            };
        }
        case Actions.SIGNIN_SUCCESS:
        {
            return {
                ...state,
                data: action.payload,
                isAuthenticated : true,
                loginFailed : false,
                error: {}
            };
        }
        case Actions.SIGNIN_ERROR:
        {
            return {
                ...state,
                data: {},
                isAuthenticated : false,
                loginFailed : true,
                error: action.error
            };
        }
        default:
        {
            return state;
        }
    }
};

export default auth;
