
import { dashboardReducers, toggleDashboardSidebar } from 'shared/modules/dashboard';
import { describe, it }      from 'mocha';
import { expect }            from 'chai';

describe('dashboard reducer', () => {

  const defaultState = {
    showNavSideBar : false
  };

  it('toggleDashboardSidebar action should set showNavSideBar to true by default', () => {
    expect(
      dashboardReducers(defaultState, toggleDashboardSidebar())
    ).to.eql(
      Object.assign({}, defaultState, { showNavSideBar : true })
    );
  });

  it('toggleDashboardSidebar action should set showNavSideBar to false', () => {
    expect(
      dashboardReducers(defaultState, toggleDashboardSidebar(false))
    ).to.eql(
      Object.assign({}, defaultState, { showNavSideBar : false })
    );
  });

});
