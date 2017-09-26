/* eslint no-underscore-dangle: 0 */

import React from 'react';
import config from 'config';
import { Router, Route, browserHistory } from 'react-router';
import AppComponent from './app/AppComponent';

const ClientComponent = () => (
  <Router history={browserHistory} >
    <Route
      name="retirement-app"
      path={config.routerPath}
      component={AppComponent}
    />
  </Router>
);

export default ClientComponent;
