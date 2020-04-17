import { objectReviewActions } from '../types';

const initialState = {
  objectReviewList: [],
};

export const objectReview = (state = initialState, action) => {
  switch (action.type) {
    case objectReviewActions.setObjectReview:
      return {
        ...state,
        objectReviewList: action.payload,
      };
    default:
      return state;
  }
};
