import axios from 'axios';
import React from 'react';
import config from '../../config';

const AxiosInstance = axios.create({
  timeout: 30000,
});
AxiosInstance.interceptors.response.use(
  response => response,
  async error => {
    return Promise.reject(error);
  },
);

AxiosInstance.interceptors.request.use(async request => {
  request.headers = {
    'Content-Type': 'application/json',
  };
  return request;
});

export default AxiosInstance;
