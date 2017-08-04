import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware     from 'redux-thunk';
import { routerReducer, createImmutableLogger }  from 'shared/modules/common';
import { reducer as formReducer } from 'redux-form/immutable';
import { combineReducers }        from 'redux-immutable';
import { Map }                    from 'immutable';

const logger      = createImmutableLogger();
const rootReducer = combineReducers({
  routing : routerReducer,
  form    : formReducer
});

const configureStore = (initialState = Map()) => {
  return compose(
    applyMiddleware(thunkMiddleware, logger)
  )(createStore)(rootReducer, initialState);
};

export default configureStore;
