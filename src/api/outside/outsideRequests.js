import AxiosInstance from './AxiosInstance';
import config from '../../config';

const getObjectReviewAPI = async body => {
  const result = await AxiosInstance.get(`${config.BASE}object_review/`, body);
  return result.data;
};

const createObjectReviewAPI = async body => {
  const result = await AxiosInstance.post(`${config.BASE}object_review/`, body);
  console.log(result);
  
  return result.data;
};

const updateObjectReviewAPI = async body => {
  const result = await AxiosInstance.put(`${config.BASE}object_review/`, body);
  return result.data;
};

const deleteObjectReviewAPI = async body => {
  const result = await AxiosInstance.delete(`${config.BASE}object_review/`, body);
  return result.data;
};

export {
  getObjectReviewAPI,
  createObjectReviewAPI,
  updateObjectReviewAPI,
  deleteObjectReviewAPI
};
