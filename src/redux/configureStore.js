import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

import initial from './initialState';
import user from './modules/user';

let composeEnhancers = compose;

const configureStore = (initialState = initial) => {
  return createStore(
    combineReducers({
      user,
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
};

export default configureStore;
