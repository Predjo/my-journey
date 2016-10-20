import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Dashboard  from '../containers/Dashboard';
import Explore    from '../containers/Explore';
import MyJourneys from '../containers/MyJourneys';
import Settings   from '../containers/Settings';


export default (
  <Route path="/" component = { Dashboard }>
    <IndexRoute component = { Explore } />
    <Route path="settings" component = { Settings } />
    <Route path="my" component = { MyJourneys } />
  </Route>
);
