import { getObjectReviewAPI, createObjectReviewAPI, updateObjectReviewAPI, deleteObjectReviewAPI } from '../../api';
import _ from 'lodash';
import { objectReviewActions } from '../types'

const getObjectReview =  (params = {}) => async dispatch => {
  const responce = await getObjectReviewAPI(params)
  dispatch({
      type: objectReviewActions.getObjectReview,
      payload: responce,
  });
};

const setObjectReview = data => async dispatch => {
  console.log(data);
  const responce = await createObjectReviewAPI(data) 
  dispatch({
      type: objectReviewActions.setObjectReview,
      payload: responce,
  });
};

const updateObjectReview = params => async dispatch => {
  const responce = await updateObjectReviewAPI(params)  
  dispatch({
      type: objectReviewActions.updateObjectReview,
      payload: responce,
  });
};

const deleteObjectReview = params => async (dispatch, getState) => {
  const responce = await deleteObjectReviewAPI(params)
  const {objectReview} = getState().objectReview;
  // _map(objectReview, (item) => {
  //   if(item.)
  // })
  dispatch({
      type: objectReviewActions.deleteObjectReview,
      payload: responce,
  });
};

export {
  getObjectReview,
  setObjectReview,
  updateObjectReview,
  deleteObjectReview,
};
