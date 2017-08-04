
import React, { PropTypes, Component } from 'react';

import 'shared/styles/core.scss';
import style from './Index.scss';

import { Link } from 'react-router';

class Index extends Component {

  render () {

    const { children } = this.props;

    return (
      <div className = { style.wrap } >
        Index
        <div className = { style.test } > Hello World from myJourney.io </div>
        <Link to = { '/signin' }> Sign In </Link>
        <Link to = { '/signup' }><i className = "fa fa-plus" /> Sign Up </Link>
        { children }
      </div>
    );
  }
}

export default Index;
