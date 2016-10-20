import React, { PropTypes, Component } from 'react';

class Dashboard extends Component {

  render () {

    const { children } = this.props;

    return (
      <div className = "dashboard wrap" >
        Dashboard
        { children }
      </div>
    );
  }
}

export default Dashboard;
