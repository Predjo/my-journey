
import { fromJS }        from 'immutable';
import { createReducer } from 'shared/modules/common';

import {
  LOCATION_CHANGE
} from 'react-router-redux';

export const initialState = fromJS({
  locationBeforeTransitions : null
});

export const routerReducer = createReducer(initialState, {

  [ LOCATION_CHANGE ](state, action) {
    return state.set('locationBeforeTransitions', action.payload);
  }

});

export default routerReducer;
