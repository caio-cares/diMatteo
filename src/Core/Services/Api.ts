import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5f04d7098b06d60016ddf126.mockapi.io/'
});

export default api;