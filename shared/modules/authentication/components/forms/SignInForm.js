
import React, { PropTypes, Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

import { createValidator } from 'shared/modules/common';

import style from './SignInForm.scss';

import { Button, FormInput } from 'shared/modules/common';

class SignInForm extends Component {

  static propTypes = {
    onSubmit         : PropTypes.func,
    isAjaxInProgress : PropTypes.bool
  }

  constructor() {
    super();
  }

  render () {

    const { handleSubmit, onSubmit, isAjaxInProgress } = this.props;

    return (
      <form className = { style.wrap } onSubmit = { handleSubmit(onSubmit) }>

        <Field
          name        = "email"
          component   = "input"
          type        = "text"
          placeholder = "Email"
          component   = { FormInput }
          props       = { { label : 'Email' } }
          readOnly    = { isAjaxInProgress } />

        <Field
          name        = "password"
          component   = "input"
          type        = "password"
          placeholder = "Password"
          component   = { FormInput }
          props       = { { label : 'Password' } }
          readOnly    = { isAjaxInProgress } />

        <Button type="submit" disabled = { isAjaxInProgress } >Sign In</Button>
      </form>
    );
  }
}

const validate = createValidator([
  { name : 'email', validator : 'isRequired', message : 'Email is required' },
  { name : 'email', validator : 'isEmail', message : 'Email is not valid' }]
);

export default reduxForm({ validate, form : 'signIn' })(SignInForm);
