import axios from 'axios';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';
import decode from "jwt-decode";

class accountService extends EventEmitter {

    constructor() {
        super();
        this.setDefaults();
    }

    setDefaults = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
    };

    login = ({ email, password }) => {
        return new Promise((resolve, reject) => {
            axios.post(systemConfig.serverBaseUrl + `/customers/login`, {
                email,
                password
            }).then(response => {
                localStorage.setItem('account', JSON.stringify(response.data.customer));
                resolve(response.data.customer);
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    setToken = token => {
        localStorage.setItem("crm_token", token);
    };

    getToken = () => {
        return localStorage.getItem("crm_token");
    };

    isAuthenticated = () => {
        const token = this.getToken();
        if (!token)
            return false;

        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired = token => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    };

    getDecodedToken = () => {
        const decoded = decode(this.getToken());
        return decoded;
    }

    logout = () => {
        localStorage.removeItem("crm_token");
    };

    isAllowed = (allowedRoles) => {
        const userRole = this.getDecodedToken().role;
        let isMatch = false;

        allowedRoles.forEach(rol => {
            if (userRole === rol) {
                isMatch = true;
                return;
            }
        });

        return isMatch;
    }
}

const instance = new accountService();

export default instance;