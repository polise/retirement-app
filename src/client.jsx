/* eslint no-underscore-dangle: 0 */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import config from 'config';

import AppContainer from './app/AppContainer';
import storeFactory from './redux/store';

const initialState = window.__PRELOADED_STATE__;
const store = storeFactory(initialState);
const history = syncHistoryWithStore(browserHistory, store);

const ClientComponent: Function = () => (
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route name="retirement-app" path={'/retire-me'} component={AppContainer} />
      <Redirect path="*" to={'/retire-me'} />
    </Router>
  </Provider>
);

export default ClientComponent;
