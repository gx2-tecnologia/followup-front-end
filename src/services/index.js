import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.208:7090',
});
export default api;
