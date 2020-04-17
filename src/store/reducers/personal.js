import { personalActions } from '../types';

const initialState = {
  personalList: [],
};

export const personal = (state = initialState, action) => {
  switch (action.type) {
    case personalActions.setPersonal:
      return {
        ...state,
        personalList: action.payload,
      };
    default:
      return state;
  }
};
