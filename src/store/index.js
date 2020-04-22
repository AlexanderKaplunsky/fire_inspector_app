import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  objectReview,
  personal,
  incidents,
  fireShield,
  extinguishers,
  documents,
  automaticExtinguishers,
  customSearch,
} from './reducers';

const middleware = [thunk];

const reducers = combineReducers({
  objectReview,
  personal,
  incidents,
  fireShield,
  extinguishers,
  documents,
  automaticExtinguishers,
  customSearch,
});

export const store = createStore(reducers, applyMiddleware(...middleware));
