import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import auth from './auth';

const rootReducer = combineReducers({
  router,
  auth,
  form: reduxFormReducer,
});

export default rootReducer;
