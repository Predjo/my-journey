
import React, { PropTypes, Component } from 'react';
import cx                              from 'classnames';

import { Input as RTInput } from 'react-toolbox/lib/input';

import style                from './Input.scss';

export default class Input extends Component {

  static propTypes = {
    name        : PropTypes.string,
    value       : PropTypes.string,
    label       : PropTypes.string,
    type        : PropTypes.string,
    onInput     : PropTypes.func,
    onChange    : PropTypes.onChange,
    onBlur      : PropTypes.func,
    placeholder : PropTypes.string,
    disabled    : PropTypes.bool,
    error       : PropTypes.error
  };

  static defaultProps = {
    defaultValue : '',
    type         : 'text'
  };

  render () {

    const { className, label, type, value, onInput, onBlur, onChange, placeholder, error, disabled } = this.props;
    const inputClass = cx( style.wrap, className );

    return (
      <RTInput
        label     = { label || placeholder }
        type      = { type }
        onInput   = { onInput }
        onBlur    = { onBlur }
        onChange  = { onChange }
        value     = { value }
        className = { inputClass }
        disabled  = { disabled }
        error     = { error }
      />
    );
  }
}

export class FormInput extends Component {

  renderError(error) {
    return (<span> { error } </span>);
  }

  render() {
    const { label, type, disabled, input, meta : { asyncValidating, error, valid } } = this.props;
    return (
      <Input
        { ...input }
        label    = { label }
        type     = { type }
        disabled = { disabled || asyncValidating }
        error    = { !valid && this.renderError(error) }
      />
    );
  }
}

