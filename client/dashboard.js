import React    from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { routes as dashboardRoutes } from 'shared/modules/dashboard';
import configureStore from 'shared/store/configure-dashboard-store';

// Requirement for material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Create store and add hydrate state from server
const store = configureStore( JSON.parse(window.__PRELOADED_STATE__));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// Required for replaying actions from devtools to work
//reduxRouterMiddleware.listenForReplays(store)

ReactDOM.render(
  <Provider store = { store }>
    <Router history = { history } routes = { dashboardRoutes } />
  </Provider>, document.getElementById('root')
);
