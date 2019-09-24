import {combineReducers} from 'redux';
import toast from './toast.reducer';

const alerts = combineReducers({
    toast
});

export default alerts;