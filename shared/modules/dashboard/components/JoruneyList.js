
import React, { PropTypes, Component } from 'react';
import JourneyTile from './JourneyTile';

class JourneyList extends Component {

  render () {

    const { joruneyList = [] } = this.props;

    return (
      <div className = "joruney-list wrap" >
        { joruneyList.map( journey => (
          <JourneyTile journey = { journey } key = { journey.id } />
          ))
        }
      </div>
    );
  }
}

export default JourneyList;
