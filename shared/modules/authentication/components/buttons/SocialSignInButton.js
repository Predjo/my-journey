
import { capitalize }                  from 'lodash';
import React, { PropTypes, Component } from 'react';
import cx                              from 'classnames';

import { Button }                      from 'shared/modules/common';

import style                           from './SocialSignInButton.scss';

export class SocialSignInButton extends Component {

  static propTypes = {
    type : PropTypes.oneOf(['facebook', 'google', 'twitter']).isRequired
  };

  static defaultProps = {
    type : 'facebook'
  };

  render () {

    const { type  } = this.props;

    const wrapClass = cx( style.wrap, style[type] );

    return (
      <Button icon = { type } className = { wrapClass } >
        Login with { capitalize(type) }
      </Button>
    );
  }
}

export default SocialSignInButton;
