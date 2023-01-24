import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
});
