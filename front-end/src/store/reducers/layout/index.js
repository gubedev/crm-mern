import { combineReducers } from 'redux';
import sidebar from './sidebar.reducer';
import overlay from './overlay.reducer';
import profileDropdown from './profile-dropdown.reducer';

const layout = combineReducers({
    sidebar,
    overlay,
    profileDropdown
});

export default layout;