import axios from 'axios';
import config from '../../apikey';

export const baseAxios = axios.create({
  baseURL: 'http://10.0.2.2:8080',

  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const apiAxios = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
