import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { routes as indexRoutes }  from 'shared/modules/index';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

// Create store and add hydrate state from server
import configureStore from 'shared/store/configure-dashboard-store';

// Add the reducer to your store on the `routing` key
const store = configureStore( fromJS(JSON.parse(window.__PRELOADED_STATE__)));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
      return state.get('routing').toObject();
  }
});

ReactDOM.render(
  <Provider store = { store }>
    <Router history={ history } routes = { indexRoutes } />
  </Provider>, document.getElementById('root')
);
