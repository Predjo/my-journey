
import React, { PropTypes, Component } from 'react';
import MuiThemeProvider                from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme                     from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({ userAgent : typeof window !== 'undefined' ? window.navigator.userAgent : null });

import style from './Dashboard.scss';

class Dashboard extends Component {

  render () {

    const { children } = this.props;

    return (
      <MuiThemeProvider muiTheme = { muiTheme } >
        <div className = { style.wrap } >
          Dashboard
          { children }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Dashboard;
