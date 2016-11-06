import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { routes as indexRoutes }  from 'shared/modules/index';
import { Provider } from 'react-redux';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    routing : routerReducer
  }),
  // hydrating server.
  JSON.parse(window.__PRELOADED_STATE__)
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store = { store }>
    <Router history={ history } routes = { indexRoutes } />
  </Provider>, document.getElementById('root')
);
