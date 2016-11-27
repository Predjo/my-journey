import { Iterable } from 'immutable';
import createLogger from 'redux-logger';

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

export function createImmutableLogger() {
  return createLogger({
    stateTransformer : (state) => {

      if (Iterable.isIterable(state)) {
        return state.toJS();
      }

      return state;
    }
});
}
