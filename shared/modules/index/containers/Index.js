
import React, { PropTypes, Component } from 'react';

import style from './Index.scss';

class Index extends Component {

  render () {

    const { children } = this.props;

    return (
      <div className = { style.wrap } >
        Index
        <div className = { style.test } > Hello World from myJourney.io </div>
        { children }
      </div>
    );
  }
}

export default Index;
