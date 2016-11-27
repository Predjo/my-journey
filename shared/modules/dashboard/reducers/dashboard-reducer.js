
import { Map } from 'immutable';

import { createReducer } from 'shared/modules/common';

import ActionTypes from '../constants/action-types';

export const initialState = Map({
  showNavSideBar : false
});

export const dashboardReducer = createReducer(initialState, {

  [ ActionTypes.TOGGLE_DASHBOARD_SIDEBAR ](state, action) {
    const show = Boolean(action.show);
    return state.set('showNavSideBar', show);
  }

});


export default dashboardReducer;
