import { incidentsActions } from '../types';

const initialState = {
  incidentsList: [],
};

export const incidents = (state = initialState, action) => {
  switch (action.type) {
    case incidentsActions.setIncidents:
      return {
        ...state,
        incidentsList: action.payload,
      };
    default:
      return state;
  }
};
