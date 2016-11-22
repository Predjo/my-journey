import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware   from 'redux-thunk';
import createLogger      from 'redux-logger';
import { routerReducer } from 'react-router-redux';

const logger      = createLogger();
const rootReducer = combineReducers({
  routing : routerReducer
});

const configureStore = (initialState = {}) => {
  return compose(
    applyMiddleware(thunkMiddleware, logger)
  )(createStore)(rootReducer, initialState);
};

export default configureStore;
