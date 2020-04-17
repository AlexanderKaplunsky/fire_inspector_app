import {
  getObjectReviewAPI,
  createObjectReviewAPI,
  updateObjectReviewAPI,
  deleteObjectReviewAPI,
} from '../../api';
import _ from 'lodash';
import { objectReviewActions } from '../types';

const getObjectReview = (params = {}) => async dispatch => {
  const response = await getObjectReviewAPI(params);
  dispatch({
    type: objectReviewActions.setObjectReview,
    payload: response,
  });
};

const setObjectReview = data => async dispatch => {
  const response = await createObjectReviewAPI(data);
  dispatch({
    type: objectReviewActions.setObjectReview,
    payload: response,
  });
};

const updateObjectReview = params => async dispatch => {
  const response = await updateObjectReviewAPI(params);
  dispatch({
    type: objectReviewActions.setObjectReview,
    payload: response,
  });
};

const deleteObjectReview = params => async dispatch => {
  const response = await deleteObjectReviewAPI(params);
  dispatch({
    type: objectReviewActions.setObjectReview,
    payload: response,
  });
};

export {
  getObjectReview,
  setObjectReview,
  updateObjectReview,
  deleteObjectReview,
};
