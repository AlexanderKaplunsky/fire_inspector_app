import {
  getAutomaticExtinguishersAPI,
  createAutomaticExtinguishersAPI,
  updateAutomaticExtinguishersAPI,
  deleteAutomaticExtinguishersAPI,
} from '../../api';
import { automaticExtinguishersActions } from '../types';

const getAutomaticExtinguishers = (params = {}) => async dispatch => {
  const response = await getAutomaticExtinguishersAPI(params);
  dispatch({
    type: automaticExtinguishersActions.setAutomaticExtinguishers,
    payload: response,
  });
};

const setAutomaticExtinguishers = data => async dispatch => {
  const response = await createAutomaticExtinguishersAPI(data);
  dispatch({
    type: automaticExtinguishersActions.setAutomaticExtinguishers,
    payload: response,
  });
};

const updateAutomaticExtinguishers = params => async dispatch => {
  const response = await updateAutomaticExtinguishersAPI(params);
  dispatch({
    type: automaticExtinguishersActions.setAutomaticExtinguishers,
    payload: response,
  });
};

const deleteAutomaticExtinguishers = params => async dispatch => {
  const response = await deleteAutomaticExtinguishersAPI(params);
  dispatch({
    type: automaticExtinguishersActions.setAutomaticExtinguishers,
    payload: response,
  });
};

export { getAutomaticExtinguishers, setAutomaticExtinguishers, updateAutomaticExtinguishers, deleteAutomaticExtinguishers };
