import {
  getFireShieldAPI,
  createFireShieldAPI,
  updateFireShieldAPI,
  deleteFireShieldAPI,
} from '../../api';
import { fireShieldActions } from '../types';

const getFireShield = (params = {}) => async dispatch => {
  const response = await getFireShieldAPI(params);
  dispatch({
    type: fireShieldActions.setFireShield,
    payload: response,
  });
};

const setFireShield = data => async dispatch => {
  const response = await createFireShieldAPI(data);
  dispatch({
    type: fireShieldActions.setFireShield,
    payload: response,
  });
};

const updateFireShield = params => async dispatch => {
  const response = await updateFireShieldAPI(params);
  dispatch({
    type: fireShieldActions.setFireShield,
    payload: response,
  });
};

const deleteFireShield = params => async dispatch => {
  const response = await deleteFireShieldAPI(params);
  dispatch({
    type: fireShieldActions.setFireShield,
    payload: response,
  });
};

export { getFireShield, setFireShield, updateFireShield, deleteFireShield };
