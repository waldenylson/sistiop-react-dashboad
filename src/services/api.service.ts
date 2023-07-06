import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.80.8.54:8000',
});

export default api;
