import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "https://localhost:3333/"
});

export default api;