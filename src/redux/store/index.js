import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import immutable from 'redux-immutable-state-invariant';
import createLogger from 'redux-logger';
import config from 'config';

import reducers from '../Reducers';
// import analyticsMiddleware from './AnalyticsMiddleware';

const loggerMiddleware = createLogger();

export default (initialState) => {
  // Looks for the presence of an environment variable. If more added, this need modifying
  const middleware = config.environment === 'production' ?
    [thunkMiddleware] :
    [thunkMiddleware, immutable(), loggerMiddleware];

  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../Reducers', () => {
      const nextReducer = reducers;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
};
