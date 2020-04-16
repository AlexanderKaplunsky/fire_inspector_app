import { objectReviewActions } from '../types'
const initialState = {
  objectReview: [],
};

export const objectReview = (state = initialState, action) => {
  switch (action.type) {
    case objectReviewActions.getObjectReview:
      return {
        ...state,
        objectReview: action.payload,
      };
    case objectReviewActions.setObjectReview:
      return {
        ...state,
        objectReview: [...objectReview, action.payload],
      };
    default:
      return state;
  }
};
