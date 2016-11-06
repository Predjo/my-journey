import React, { PropTypes, Component } from 'react';

import style from './Explore.scss';

class Explore extends Component {

  componentDidMount () {
    console.log('Hello ');
  }

  render () {

    return (
      <div className = { style.wrap } >
        Explore
      </div>
    );
  }
}

export default Explore;
