
import { Map } from 'immutable';

import { createReducer } from 'shared/modules/common';

import ActionTypes from '../constants/action-types';

export const defaultState = Map({
  showNavSideBar : false
});

export const dashboardReducer = createReducer(defaultState, {

  [ ActionTypes.TOGGLE_DASHBOARD_SIDEBAR ](state, action) {
    const show = Boolean(action.show);
    return state.set('showNavSideBar', show);
  }

});
