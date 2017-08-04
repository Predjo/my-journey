import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware     from 'redux-thunk';
import { routerReducer, createImmutableLogger }   from 'shared/modules/common';
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { Map }             from 'immutable';

import { dashboardReducer } from 'shared/modules/dashboard';

const logger      = createImmutableLogger();
const rootReducer = combineReducers({
  dashboard : dashboardReducer,
  routing   : routerReducer,
  form      : formReducer
});

const configureStore = (initialState = Map()) => {
  return compose(
    applyMiddleware(thunkMiddleware, logger)
  )(createStore)(rootReducer, initialState);
};

export default configureStore;
