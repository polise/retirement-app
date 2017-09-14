import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import config from '../app/AppReducer';

const reducers = {
  config,
  routing: routerReducer,
};

export default combineReducers(reducers);
