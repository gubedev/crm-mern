import { combineReducers } from 'redux';
import {reducer as reduxForm } from 'redux-form';
import account from './account';
import alerts from './alerts';
import layout from './layout';
import dashboard from './dashboard';

const createReducer = (asyncReducers) =>
    combineReducers({
        account,
        alerts,
        layout,
        dashboard,
        form: reduxForm,
        ...asyncReducers
    });

export default createReducer;
