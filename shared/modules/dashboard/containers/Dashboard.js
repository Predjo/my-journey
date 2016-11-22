
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { Panel, Layout, NavDrawer } from 'react-toolbox/lib/layout';

import Header  from '../components/Header';
import NavSideBar from '../components/NavSideBar';

import { toggleDashboardSidebar } from '../actions/dashboardActions';

import style from './Dashboard.scss';

class Dashboard extends Component {

  static propTypes = {
    dashboardState : PropTypes.object
  };

  toggleSideBar() {
    const { dispatch, dashboardState } = this.props;
    dispatch(toggleDashboardSidebar( !dashboardState.showNavSideBar ));
  }

  render () {

    const { dashboardState, children } = this.props;

    return (
        <Layout theme = { style }>
          <NavDrawer
            active         = { dashboardState.showNavSideBar }
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
  const { dashboard } = state;
  return { dashboardState : dashboard };
};

export default connect(mapStateToProps)(Dashboard);
