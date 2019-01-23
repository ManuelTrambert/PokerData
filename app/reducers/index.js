// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import print from './print';

const rootReducer = combineReducers({
  print,
  counter,
  router
});

export default rootReducer;
