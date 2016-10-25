import React, { PropTypes, Component } from 'react';

class Pricing extends Component {

  render () {

    const { children } = this.props;

    return (
      <div className = "pricing wrap" >
        Pricing
        { children }
      </div>
    );
  }
}

export default Pricing;
