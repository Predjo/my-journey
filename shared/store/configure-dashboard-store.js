import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware   from 'redux-thunk';
import createLogger      from 'redux-logger';
import { routerReducer } from 'react-router-redux';

import { dashboardReducers } from 'shared/modules/dashboard';

const logger      = createLogger();
const rootReducer = combineReducers({
  dashboard : dashboardReducers,
  routing   : routerReducer
});

const configureStore = (initialState = {}) => {
  return compose(
    applyMiddleware(thunkMiddleware, logger)
  )(createStore)(rootReducer, initialState);
};

export default configureStore;