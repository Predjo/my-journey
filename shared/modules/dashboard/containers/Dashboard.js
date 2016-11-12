
import React, { PropTypes, Component } from 'react';

import { Panel, Layout, NavDrawer } from 'react-toolbox/lib/layout';

import style from './Dashboard.scss';

import Header  from '../components/Header';
import NavSideBar from '../components/NavSideBar';

class Dashboard extends Component {

  render () {

    const { children } = this.props;

    return (
        <Layout theme = { style }>
          <NavDrawer
            active
            permanentAt = "md" >
            <NavSideBar />
          </NavDrawer>

          <Panel className = { style.panel } >
            <Header />
            { children }
          </Panel>

        </Layout>
    );
  }
}

export default Dashboard;
