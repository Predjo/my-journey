import React, { PropTypes, Component } from 'react';

class Index extends Component {

  render () {

    const { children } = this.props;

    return (
      <div className = "index wrap" >
        Index
        { children }
      </div>
    );
  }
}

export default Index;
