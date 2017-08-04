
import React, { PropTypes, Component } from 'react';

import style from './SignIn.scss';

import SignInForm from '../components/forms/SignInForm';
import SocialSignInButton from '../components/buttons/SocialSignInButton';

export class SignIn extends Component {


  render () {

    return (
      <div className = { style.wrap } >
        <h2> Sign In </h2>
        <div className = { style.buttonWrap } >
          <SocialSignInButton type = "facebook" />
          <SocialSignInButton type = "twitter"  />
          <SocialSignInButton type = "google"   />
          <SignInForm onSubmit = { data => console.log(data) } />
        </div>
      </div>
    );
  }
}

export default SignIn;
