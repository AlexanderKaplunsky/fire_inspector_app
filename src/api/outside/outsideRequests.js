import AxiosInstance from './AxiosInstance';
import config from '../../../config';

const checkPhoneNumber = async body => {
  const result = await AxiosInstance.post(`${config.BASE_SSO}sign_in/`, body);
  return result.data;
};

export {

};
