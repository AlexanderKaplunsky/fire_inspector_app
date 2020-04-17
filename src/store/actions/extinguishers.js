import {
  getExtinguishersAPI,
  createExtinguishersAPI,
  updateExtinguishersAPI,
  deleteExtinguishersAPI,
} from '../../api';
import { extinguishersActions } from '../types';

const getExtinguishers = (params = {}) => async dispatch => {
  const response = await getExtinguishersAPI(params);
  dispatch({
    type: extinguishersActions.setExtinguishers,
    payload: response,
  });
};

const setExtinguishers = data => async dispatch => {
  const response = await createExtinguishersAPI(data);
  dispatch({
    type: extinguishersActions.setExtinguishers,
    payload: response,
  });
};

const updateExtinguishers = params => async dispatch => {
  const response = await updateExtinguishersAPI(params);
  dispatch({
    type: extinguishersActions.setExtinguishers,
    payload: response,
  });
};

const deleteExtinguishers = params => async dispatch => {
  const response = await deleteExtinguishersAPI(params);
  dispatch({
    type: extinguishersActions.setExtinguishers,
    payload: response,
  });
};

export { getExtinguishers, setExtinguishers, updateExtinguishers, deleteExtinguishers };
