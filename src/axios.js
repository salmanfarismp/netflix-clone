import axios from 'axios';
import { apiBaseUrl } from './Constants/Constant';

const instance = axios.create({
    baseURL: apiBaseUrl
  });

export default instance;