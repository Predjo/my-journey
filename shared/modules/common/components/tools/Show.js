
import React, { PropTypes, Component } from 'react';

export class Show extends Component {

  static propTypes = {
    show : PropTypes.bool
  };

  static defaultProps = {
    show : false
  };

  render () {

    const { show, children } = this.props;
    return show && children ? React.Children.only(this.props.children) : null;
  }
}

export default Show;
