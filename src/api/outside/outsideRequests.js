import AxiosInstance from './AxiosInstance';
import config from '../../../config';
import {
  LOG_INVALID_PROMO,
  LOG_PHONE_SUBMITTED,
  LOG_SUBMITTED_PROMO_SUCCESS,
} from '../../constant/amplitudeEvents';
import { API_INVALID_PROMO_CODE } from '../../constant/apiErrors';
import { logMonitoringEvent } from '../../services/monitoringService';
import { splitPromocode } from 'helpers';
import Amplitude from '../../config/Amplitude';

const getPositionByIP = async () => {
  const result = await AxiosInstance.get(
    `${config.BASE_ADMIN}current_user/geo_ip/`,
  );
  return result.data;
};
const checkPromoCode = async promoCode => {
  const splittedPromocode = await splitPromocode(promoCode);
  try {
    const result = await AxiosInstance.get(
      `${config.BASE_ADMIN}promo_code/${promoCode}/is_valid/`,
    );
    if (result.data.is_valid) {
      logMonitoringEvent(LOG_SUBMITTED_PROMO_SUCCESS, splittedPromocode);
      Amplitude.setUserProperties(splittedPromocode);
      return result.data.is_valid;
    }
    throw new Error(API_INVALID_PROMO_CODE);
  } catch (error) {
    logMonitoringEvent(LOG_INVALID_PROMO, {
      ...splittedPromocode,
      errMessage: error.message,
    });
    throw error;
  }
};
const checkPhoneNumber = async body => {
  logMonitoringEvent(LOG_PHONE_SUBMITTED, {
    phone_number: body.phone_number,
  });
  const result = await AxiosInstance.post(`${config.BASE_SSO}sign_in/`, body);
  return result.data;
};
const confirmPhone = async ({ phoneNumber, verificationCode }) => {
  const result = await AxiosInstance.post(
    `${config.BASE_SSO}auth/confirm_phone_number/`,
    { phone_number: phoneNumber, code: verificationCode },
  );
  return result.data;
};
const checkTokenValidity = async token => {
  const result = await AxiosInstance.post(
    `${config.BASE_SSO}auth/token/verify/`,
    { token },
  );
  return result;
};

const refreshTokenAPI = async token => {
  const result = await AxiosInstance.post(
    `${config.BASE_SSO}auth/token/refresh/`,
    { token },
  );
  return result.data.token;
};

const getInvitationCommissionAPI = async () => {
  const result = await AxiosInstance.get(
    `${config.BASE_ADMIN}general/invitation_commission/`,
  );
  return result.data;
};
const sendStoreToBack = async store => {
  await AxiosInstance.post(`${config.BASE_ADMIN}technical/app_state/`, {
    state: store,
  });
};

export {
  getPositionByIP,
  checkPromoCode,
  checkPhoneNumber,
  confirmPhone,
  checkTokenValidity,
  refreshTokenAPI,
  getInvitationCommissionAPI,
  sendStoreToBack,
};
