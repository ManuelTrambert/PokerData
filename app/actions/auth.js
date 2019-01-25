import api, { setAuthToken, unsetAuthToken } from '../api';
import { startSubmit, stopSubmit } from 'redux-form';
//import { USER_SELECTED } from './profile';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export function login({ identifier, password }) {
  return async dispatch => {
    dispatch(startSubmit('loginForm'));
    try {
      console.log('Here');
      const res = await api.post('/Clients/login', {
        username: identifier,
        password
      });
      console.log(res);
      dispatch({
        type: AUTHENTICATED,
        payload: { identifier, avatarUrl: res.data.avatar }
      });
      dispatch({
        type: USER_SELECTED,
        username: identifier
      });
      localStorage.setItem('userToken', res.data.token);
      //setAuthToken(res.data.token);
      /*dispatch(
        emitMessage('register', {
          token: res.data.token
        })
      );*/
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email/accountname or password'
      });
    }
    dispatch(stopSubmit('loginForm'));
  };
}

/*export function logout() {
  localStorage.clear();
  unsetAuthToken();
  return {
    type: UNAUTHENTICATED
  };
}*/
