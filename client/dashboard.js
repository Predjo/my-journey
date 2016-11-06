import React    from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from 'shared/reducers';

import { routes as dashboardRoutes } from 'shared/modules/dashboard';

// Requirement for material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing : routerReducer
  }),
  // hydrating server.
  JSON.parse(window.__PRELOADED_STATE__)
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// Required for replaying actions from devtools to work
//reduxRouterMiddleware.listenForReplays(store)

ReactDOM.render(
  <Provider store = { store }>
    <Router history = { history } routes = { dashboardRoutes } />
  </Provider>, document.getElementById('root')
);
