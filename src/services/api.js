import axios from 'axios';
import qs from 'qs';

const api = axios.create({
    baseURL: 'https://api.uptimerobot.com/v2',
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    },
});

export const settings = (body = {}) => {
    let obj = {
        'api_key': process.env.REACT_APP_UPTIME_API_KEY,
    };

    return qs.stringify(Object.assign(obj, body));
};

export default api;