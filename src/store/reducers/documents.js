import { documentsActions } from '../types';

const initialState = {
  documentsList: [],
};

export const documents = (state = initialState, action) => {
  switch (action.type) {
    case documentsActions.setDocuments:
      return {
        ...state,
        documentsList: action.payload,
      };
    default:
      return state;
  }
};
