/* eslint no-underscore-dangle: 0 */

import React from 'react';
import config from 'config';
import { Router, Route, Redirect, browserHistory } from 'react-router'; // browserHistory
import { syncHistoryWithStore } from 'react-router-redux';
import storeFactory from './redux/store';

const initialState = window.__PRELOADED_STATE__;
const store = storeFactory(initialState);
const history = syncHistoryWithStore(browserHistory, store);

// import config from 'config';

import AppComponent from './app/AppComponent';

const Main = () => (
  <h1>Hello world</h1>
);
console.log('hey -- routerPath is ', config.routerPath);
const ClientComponent = () => (
  <Router history={history} >
    <Route name="retirement-app" path="/test" component={Main} />
    {/* <Route name="retirement-app" path={`${config.routerPath}/test`} component={AppComponent} /> */}
    {/* <Route name="retirement-app2" path={`${config.routerPath}/retirement-app`} component={AppComponent} /> */}
    <Redirect path="*" to={'/retirement-app'} />
  </Router>
);

export default ClientComponent;
