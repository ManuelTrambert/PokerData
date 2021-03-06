import api, {setAuthToken, unsetAuthToken} from '../api';
import {startSubmit, stopSubmit} from 'redux-form';
import {push} from 'react-router-redux';
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
      dispatch({
        type: AUTHENTICATED,
        payload: {identifier, userId: res.data.id}
      });
      localStorage.setItem('userToken', res.data.hash);
      setAuthToken(res.data.hash);
      dispatch(push('/dashboard'));
    } catch(error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email/accountname or password'
      });
    }
    dispatch(stopSubmit('loginForm'));
  };
}

export function register({identifier, password, email, firstname, lastname}) {
  return async dispatch => {
    dispatch(startSubmit('registerForm'));
    try {
      const res = await api.post('/users', {
        username: identifier,
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
    return res;
  };
}
