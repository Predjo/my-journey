
import {
  dashboardReducer,
  toggleDashboardSidebar,
  dashboardReducerInitialState,
} from 'shared/modules/dashboard';

import { expect } from 'chai';

const defaultState = dashboardReducerInitialState;

describe('dashboard reducer from dashboard module', () => {

  it('toggleDashboardSidebar action should set showNavSideBar to true by default', () => {
    expect(
      dashboardReducer(defaultState, toggleDashboardSidebar())
    ).to.eql(
      defaultState.set( 'showNavSideBar', true )
    );
  });

  it('toggleDashboardSidebar action should set showNavSideBar to false', () => {
    expect(
      dashboardReducer(defaultState, toggleDashboardSidebar(false))
    ).to.eql(
      defaultState.set( 'showNavSideBar', false )
    );
  });

});
