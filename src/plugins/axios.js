import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://testing-system-api.herokuapp.com',
});

export default instance;