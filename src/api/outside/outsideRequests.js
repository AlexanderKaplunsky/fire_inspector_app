import AxiosInstance from './AxiosInstance';
import config from '../../config';

const getObjectReviewAPI = async body => {
  const result = await AxiosInstance.get(`${config.BASE}object_review/`, body);
  return result.data;
};

const createObjectReviewAPI = async body => {
  const result = await AxiosInstance.post(`${config.BASE}object_review/`, body);
  return result.data;
};

const updateObjectReviewAPI = async body => {
  const result = await AxiosInstance.put(`${config.BASE}object_review/`, body);
  return result.data;
};

const deleteObjectReviewAPI = async body => {
  const result = await AxiosInstance.post(
    `${config.BASE}delete_object_review/`,
    body,
  );
  return result.data;
};

const getPersonalAPI = async body => {
  const result = await AxiosInstance.get(`${config.BASE}personal/`, body);
  return result.data;
};

const createPersonalAPI = async body => {
  const result = await AxiosInstance.post(`${config.BASE}personal/`, body);
  return result.data;
};

const updatePersonalAPI = async body => {
  const result = await AxiosInstance.put(`${config.BASE}personal/`, body);
  return result.data;
};

const deletePersonalAPI = async body => {
  const result = await AxiosInstance.post(
    `${config.BASE}delete_personal/`,
    body,
  );
  return result.data;
};

const getIncidentsAPI = async body => {
  const result = await AxiosInstance.get(`${config.BASE}incidents/`, body);
  return result.data;
};

const createIncidentsAPI = async body => {
  const result = await AxiosInstance.post(`${config.BASE}incidents/`, body);
  return result.data;
};

const updateIncidentsAPI = async body => {
  const result = await AxiosInstance.put(`${config.BASE}incidents/`, body);
  return result.data;
};

const deleteIncidentsAPI = async body => {
  const result = await AxiosInstance.post(
    `${config.BASE}delete_incidents/`,
    body,
  );
  return result.data;
};

const getFireShieldAPI = async body => {
  const result = await AxiosInstance.get(`${config.BASE}fire_shield/`, body);
  return result.data;
};

const createFireShieldAPI = async body => {
  const result = await AxiosInstance.post(`${config.BASE}fire_shield/`, body);
  return result.data;
};

const updateFireShieldAPI = async body => {
  const result = await AxiosInstance.put(`${config.BASE}fire_shield/`, body);
  return result.data;
};

const deleteFireShieldAPI = async body => {
  const result = await AxiosInstance.post(
    `${config.BASE}delete_fire_shield/`,
    body,
  );
  return result.data;
};

const getExtinguishersAPI = async body => {
  const result = await AxiosInstance.get(`${config.BASE}extinguishers/`, body);
  return result.data;
};

const createExtinguishersAPI = async body => {
  const result = await AxiosInstance.post(`${config.BASE}extinguishers/`, body);
  return result.data;
};

const updateExtinguishersAPI = async body => {
  const result = await AxiosInstance.put(`${config.BASE}extinguishers/`, body);
  return result.data;
};

const deleteExtinguishersAPI = async body => {
  const result = await AxiosInstance.post(
    `${config.BASE}delete_extinguishers/`,
    body,
  );
  return result.data;
};

const getDocumentsAPI = async body => {
  const result = await AxiosInstance.get(`${config.BASE}documents/`, body);
  return result.data;
};

const createDocumentsAPI = async body => {
  const result = await AxiosInstance.post(`${config.BASE}documents/`, body);
  return result.data;
};

const updateDocumentsAPI = async body => {
  const result = await AxiosInstance.put(`${config.BASE}documents/`, body);
  return result.data;
};

const deleteDocumentsAPI = async body => {
  const result = await AxiosInstance.post(
    `${config.BASE}delete_documents/`,
    body,
  );
  return result.data;
};

const getAutomaticExtinguishersAPI = async body => {
  const result = await AxiosInstance.get(
    `${config.BASE}automatic_extinguishing/`,
    body,
  );
  return result.data;
};

const createAutomaticExtinguishersAPI = async body => {
  const result = await AxiosInstance.post(
    `${config.BASE}automatic_extinguishing/`,
    body,
  );
  return result.data;
};

const updateAutomaticExtinguishersAPI = async body => {
  const result = await AxiosInstance.put(
    `${config.BASE}automatic_extinguishing/`,
    body,
  );
  return result.data;
};

const deleteAutomaticExtinguishersAPI = async body => {
  const result = await AxiosInstance.post(
    `${config.BASE}delete_automatic_extinguishing/`,
    body,
  );
  return result.data;
};

export {
  getObjectReviewAPI,
  createObjectReviewAPI,
  updateObjectReviewAPI,
  deleteObjectReviewAPI,
  getPersonalAPI,
  createPersonalAPI,
  updatePersonalAPI,
  deletePersonalAPI,
  getIncidentsAPI,
  createIncidentsAPI,
  updateIncidentsAPI,
  deleteIncidentsAPI,
  getFireShieldAPI,
  createFireShieldAPI,
  updateFireShieldAPI,
  deleteFireShieldAPI,
  getExtinguishersAPI,
  createExtinguishersAPI,
  updateExtinguishersAPI,
  deleteExtinguishersAPI,
  getDocumentsAPI,
  createDocumentsAPI,
  updateDocumentsAPI,
  deleteDocumentsAPI,
  getAutomaticExtinguishersAPI,
  createAutomaticExtinguishersAPI,
  updateAutomaticExtinguishersAPI,
  deleteAutomaticExtinguishersAPI,
};
