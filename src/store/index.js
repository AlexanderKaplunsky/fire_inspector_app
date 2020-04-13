import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { objectReview } from './reducers';

const middleware = [thunk];

const reducers = combineReducers({
  objectReview,
});

export const store = createStore(reducers, applyMiddleware(...middleware));
