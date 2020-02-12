import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7090',
});
export default api;
