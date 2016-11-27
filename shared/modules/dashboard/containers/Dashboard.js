
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { Panel, Layout, NavDrawer } from 'react-toolbox/lib/layout';

import Header  from '../components/Header';
import NavSideBar from '../components/NavSideBar';

import { toggleDashboardSidebar } from '../actions/dashboard-actions';

import style from './Dashboard.scss';

export class Dashboard extends Component {

  static propTypes = {
    dashboardState : PropTypes.object
  };

  toggleSideBar() {
    const { dispatch, dashboardState } = this.props;
    dispatch(toggleDashboardSidebar( !dashboardState.get('showNavSideBar') ));
  }

  render () {

    const { dashboardState, children } = this.props;

    return (
        <Layout theme = { style }>
          <NavDrawer
            active         = { dashboardState.get('showNavSideBar') }
            onOverlayClick = {  () => this.toggleSideBar()  } >
            <NavSideBar />
          </NavDrawer>

          <Panel className = { style.panel } >
            <Header handleToggleSideBar = { () => this.toggleSideBar() } />
            { children }
          </Panel>

        </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return { dashboardState : state.get('dashboard') };
};

export default connect(mapStateToProps)(Dashboard);
