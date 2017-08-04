
import { omit }                        from 'lodash';
import React, { PropTypes, Component } from 'react';
import cx                              from 'classnames';

import Show                            from '../tools/Show';
import { Button as RTButton }          from 'react-toolbox/lib/button';

import style                           from './Button.scss';

export class Button extends Component {

  static propTypes = {
    icon   : PropTypes.string,
    raised : PropTypes.bool
  };

  static defaultProps = {
    icon : ''
  };

  render () {

    const { className, children, icon } = this.props;
    const wrapClass = cx( style.wrap, className );

    return (
      <RTButton { ...omit(this.props, 'icon') } className = { wrapClass } >
        <Show show = { Boolean(icon) } ><i className = { `fa fa-${ icon }` } /></Show>
        { children }
      </RTButton>
    );
  }
}

export default Button;
