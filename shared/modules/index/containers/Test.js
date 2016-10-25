import React, { PropTypes, Component } from 'react';

class Pricing extends Component {

  componentDidMount() {
    console.log('Test module');
  }

  render () {

    const { children } = this.props;

    return (
      <div className = "test wrap" >
        Test
        { children }
      </div>
    );
  }
}

export default Pricing;
