import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware     from 'redux-thunk';
import { routerReducer, createImmutableLogger }  from 'shared/modules/common';
import { combineReducers } from 'redux-immutable';
import { Map }             from 'immutable';

const logger      = createImmutableLogger();
const rootReducer = combineReducers({
  routing : routerReducer
});

const configureStore = (initialState = Map()) => {
  return compose(
    applyMiddleware(thunkMiddleware, logger)
  )(createStore)(rootReducer, initialState);
};

export default configureStore;
