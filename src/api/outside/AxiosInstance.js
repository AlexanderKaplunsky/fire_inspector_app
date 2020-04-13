import axios from 'axios';
import { getAdvertisingIDFromDevice, showToastMessage } from 'helpers';
import React from 'react';
import { logErrorWithUser } from '../../config/Sentry';
import getUserAgentApp from '../getUserAgentApp';

const AxiosInstance = axios.create({
  timeout: 30000,
});
AxiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error) {
      await logErrorWithUser(error, { logger: 'kickback.mobile' });
    }
    if (error && error.response && error.response.status >= 500) {
      showToastMessage(
        "We're sorry - our servers are having trouble, please try again!",
      );
    }
    return Promise.reject(error);
  },
);

AxiosInstance.interceptors.request.use(async request => {
  const userAgent = await getUserAgentApp();
  request.headers = {
    'Content-Type': 'application/json',
    'User-Agent': userAgent,
  };
  const advertisingID = await getAdvertisingIDFromDevice();
  if (
    advertisingID &&
    advertisingID !== '00000000-0000-0000-0000-000000000000'
  ) {
    request.headers.advertiser_id = advertisingID;
  }
  return request;
});

export default AxiosInstance;
