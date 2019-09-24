import { combineReducers } from 'redux';
import general from './dashboard.reducer';

const dashboard = combineReducers({
    general
});

export default dashboard;