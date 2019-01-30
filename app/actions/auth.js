import api, {setAuthToken, unsetAuthToken} from '../api';
import {startSubmit, stopSubmit} from 'redux-form';
import { push } from 'react-router-redux';
//import { USER_SELECTED } from './profile';
import {bcrypt} from 'bcrypt-pbkdf';
export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export function login({identifier, password}) {
  return async dispatch => {
    dispatch(startSubmit('loginForm'));
    try {
      const res = await api.post('/users/login', {
        username: identifier,
        password
      });
      /*dispatch({
        type: AUTHENTICATED,
        payload: { identifier, avatarUrl: res.data.avatar }
      });
      dispatch({
        type: USER_SELECTED,
        username: identifier
      });*/
      localStorage.setItem('userToken', res.data);
      setAuthToken(res.data);
      //console.log('here');
      //browserHistory.push('/dashboard');
      //console.log('ici');
      /*dispatch(
        emitMessage('register', {
          token: res.data.token
        })
      );*/
    } catch(error) {
      console.log('la', error);
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email/accountname or password'
      });
    }
    dispatch(stopSubmit('loginForm'));
    if (localStorage.getItem('userToken') !== 'error') {
      dispatch(push('/dashboard'));
    }
  };
}

/*export function logout() {
  localStorage.clear();
  unsetAuthToken();
  return {
    type: UNAUTHENTICATED
  };
}*/

export function register({identifier, password, email, firstname, lastname}) {
  return async dispatch => {
    dispatch(startSubmit('registerForm'));
    try {
      const res = await api.post('/users', {
        identifier,
        password,
        email,
        firstname,
        lastname
      });
    } catch(error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid username or password'
      });
    }
    dispatch(stopSubmit('loginForm'));
  };
}
