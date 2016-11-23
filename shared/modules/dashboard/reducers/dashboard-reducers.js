
import { Map } from 'immutable';

import { createReducer } from 'shared/modules/common';

import ActionTypes from '../constants/action-types';

const defaultState = {
  showNavSideBar : false
};

export const dashboardReducers = createReducer(defaultState, {

  [ ActionTypes.TOGGLE_DASHBOARD_SIDEBAR ](state, action) {
    const show = Boolean(action.show);
    return Object.assign({}, state, { showNavSideBar : show });
  }

});
