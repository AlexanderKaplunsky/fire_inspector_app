import { extinguishersActions } from '../types';

const initialState = {
  extinguishersList: [],
};

export const extinguishers = (state = initialState, action) => {
  switch (action.type) {
    case extinguishersActions.setExtinguishers:
      return {
        ...state,
        extinguishersList: action.payload,
      };
    default:
      return state;
  }
};
