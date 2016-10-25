import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory }    from 'react-router';

import { routes as indexRoutes }  from 'shared/modules/index';

ReactDOM.render(
  <Router history={ browserHistory } routes = { indexRoutes } />,
    document.getElementById('root')
);
