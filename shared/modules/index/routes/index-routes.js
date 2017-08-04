import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Index    from '../containers/Index';
import Pricing  from '../containers/Pricing';
import Test     from '../containers/Test';

import { SignIn, SignUp } from 'shared/modules/authentication';

export default (
  <Route path = "/" >
    <IndexRoute component = { Index } />

    <Route component = { Test } >
      <Route path = "pricing" component = { Pricing } />
    </Route>

    <Route path = "signin" component = { SignIn } />
    <Route path = "signup" component = { SignUp } />
  </Route>
);
