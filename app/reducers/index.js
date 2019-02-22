import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import auth from './auth';
import friends from './friends';

const rootReducer = combineReducers({
  router,
  friends,
  auth,
  form: reduxFormReducer,
});

export default rootReducer;
