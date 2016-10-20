
import React, { PropTypes, Component } from 'react';

class JourneyTile extends Component {

  render () {

    const { joruney = {} } = this.props;

    return (
      <div className = "joruney-tile wrap" >
        <div className = "image-wrap" ></div>
        <div className = "title-wrap" > { joruney.name } </div>
      </div>
    );
  }
}

export default JourneyTile;
