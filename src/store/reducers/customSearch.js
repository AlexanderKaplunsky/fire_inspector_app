import { customSearchActions } from '../types';

const initialState = {
  searchList: [],
};

export const customSearch = (state = initialState, action) => {
  switch (action.type) {
    case customSearchActions.setCustomSearch:
      return {
        ...state,
        searchList: action.payload,
      };
    default:
      return state;
  }
};
