import React    from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from 'shared/reducers';

import { routes as dashboardRoutes } from 'shared/modules/dashboard';

// Add the reducer to your store on the `routing` key
/*const store = createStore(
  combineReducers({
    ...reducers,
    routing : routerReducer
  }),
  // hydrating server.
  window.BOOTSTRAP_CLIENT_STATE
);*/

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory, store);

// Required for replaying actions from devtools to work
// reduxRouterMiddleware.listenForReplays(store)

ReactDOM.render(
//  <Provider store={store}>
    <Router history={ browserHistory } routes = { dashboardRoutes } />,
//  </Provider>,
    document.getElementById('root')
);
