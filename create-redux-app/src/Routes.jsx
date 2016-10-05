/* eslint-disable no-console */
import React from 'react';

// routing
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import browserHistory from 'react-router/lib/browserHistory';

// The components
import Main from './Base/Main';
import Dashboard from './Home/Dashboard';
import About from './About/AboutPage';

import { ROUTE_PATHS } from './constants';

// The routes such that they laxy load.
const Routes = () => (
  <Router history={browserHistory} >
    <Route path={'/'} component={Main}>
      <IndexRoute component={Dashboard} />
      <Route path={ROUTE_PATHS.DASHBOARD} component={Dashboard} />
      <Route path={ROUTE_PATHS.ABOUT} component={About} />
    </Route>
  </Router>
);

export default Routes;
