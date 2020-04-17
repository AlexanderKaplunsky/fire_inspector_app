import {
  getDocumentsAPI,
  createDocumentsAPI,
  updateDocumentsAPI,
  deleteDocumentsAPI,
} from '../../api';
import { documentsActions } from '../types';

const getDocuments = (params = {}) => async dispatch => {
  const response = await getDocumentsAPI(params);
  dispatch({
    type: documentsActions.setDocuments,
    payload: response,
  });
};

const setDocuments = data => async dispatch => {
  const response = await createDocumentsAPI(data);
  dispatch({
    type: documentsActions.setDocuments,
    payload: response,
  });
};

const updateDocuments = params => async dispatch => {
  const response = await updateDocumentsAPI(params);
  dispatch({
    type: documentsActions.setDocuments,
    payload: response,
  });
};

const deleteDocuments = params => async dispatch => {
  const response = await deleteDocumentsAPI(params);
  dispatch({
    type: documentsActions.setDocuments,
    payload: response,
  });
};

export { getDocuments, setDocuments, updateDocuments, deleteDocuments };
