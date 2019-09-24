import axios from 'axios';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class analyticService extends EventEmitter {

    constructor() {
        super();
        this.setDefaults();
    }

    setDefaults = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
    };
}

const instance = new analyticService();

export default instance;