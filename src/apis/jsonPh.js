import axios from "axios";
const BASE_URL = 'https://backend-your-keys-production.up.railway.app';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})