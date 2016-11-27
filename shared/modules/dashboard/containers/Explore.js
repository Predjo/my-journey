import React, { PropTypes, Component } from 'react';
import { Button } from 'react-toolbox/lib/button';

import style from './Explore.scss';

export class Explore extends Component {


  render () {

    return (
      <div className = { style.wrap } >
        Explore
        <Button raised onClick = { () => alert('Hello World') } >Click Me</Button>
      </div>
    );
  }
}

export default Explore;
