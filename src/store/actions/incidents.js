import {
  getIncidentsAPI,
  createIncidentsAPI,
  updateIncidentsAPI,
  deleteIncidentsAPI,
} from '../../api';
import { incidentsActions } from '../types';

const getIncidents = (params = {}) => async dispatch => {
  const response = await getIncidentsAPI(params);
  dispatch({
    type: incidentsActions.setIncidents,
    payload: response,
  });
};

const setIncidents = data => async dispatch => {
  const response = await createIncidentsAPI(data);
  dispatch({
    type: incidentsActions.setIncidents,
    payload: response,
  });
};

const updateIncidents = params => async dispatch => {
  const response = await updateIncidentsAPI(params);
  dispatch({
    type: incidentsActions.setIncidents,
    payload: response,
  });
};

const deleteIncidents = params => async dispatch => {
  const response = await deleteIncidentsAPI(params);
  dispatch({
    type: incidentsActions.setIncidents,
    payload: response,
  });
};

export { getIncidents, setIncidents, updateIncidents, deleteIncidents };
