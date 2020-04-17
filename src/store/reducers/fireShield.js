import { fireShieldActions } from '../types';

const initialState = {
  fireShieldList: [],
};

export const fireShield = (state = initialState, action) => {
  switch (action.type) {
    case fireShieldActions.setFireShield:
      return {
        ...state,
        fireShieldList: action.payload,
      };
    default:
      return state;
  }
};
