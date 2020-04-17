import { automaticExtinguishersActions } from '../types';

const initialState = {
  automaticExtinguishersList: [],
};

export const automaticExtinguishers = (state = initialState, action) => {
  switch (action.type) {
    case automaticExtinguishersActions.setAutomaticExtinguishers:
      return {
        ...state,
        automaticExtinguishersList: action.payload,
      };
    default:
      return state;
  }
};
