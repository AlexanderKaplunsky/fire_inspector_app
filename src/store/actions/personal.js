import {
  getPersonalAPI,
  createPersonalAPI,
  updatePersonalAPI,
  deletePersonalAPI,
} from '../../api';
import { personalActions } from '../types';

const getPersonal = (params = {}) => async dispatch => {
  const response = await getPersonalAPI(params);
  dispatch({
    type: personalActions.setPersonal,
    payload: response,
  });
};

const setPersonal = data => async dispatch => {
  const response = await createPersonalAPI(data);
  dispatch({
    type: personalActions.setPersonal,
    payload: response,
  });
};

const updatePersonal = params => async dispatch => {
  const response = await updatePersonalAPI(params);
  dispatch({
    type: personalActions.setPersonal,
    payload: response,
  });
};

const deletePersonal = params => async dispatch => {
  const response = await deletePersonalAPI(params);
  dispatch({
    type: personalActions.setPersonal,
    payload: response,
  });
};

export { getPersonal, setPersonal, updatePersonal, deletePersonal };
