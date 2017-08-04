
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Header  from '../components/Header';
import NavSideBar from '../components/NavSideBar';

import { toggleDashboardSidebar } from '../actions/dashboard-actions';

import 'shared/styles/core.scss';
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
        <div theme = { style }>
          <Header />
          <NavSideBar />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { dashboardState : state.get('dashboard') };
};

export default connect(mapStateToProps)(Dashboard);
