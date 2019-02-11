import produce from 'immer';
import { push } from 'react-router-redux';
import {AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR} from '../actions/auth';

function auth(draftState, credentials) {
  draftState.authenticated = true;
  draftState.authentication_error = false;
  draftState.id = credentials.userId;
}

function unauth(draftState) {
  draftState.authenticated = false;
}

function authError(draftState) {
  draftState.authentication_error = true;
}

export default function (state = {}, action) {
  return produce(state, draft => {
    switch (action.type) {
      case AUTHENTICATED:
        auth(draft, action.payload);
        break;
      case UNAUTHENTICATED:
        unauth(draft);
        break;
      case AUTHENTICATION_ERROR:
        authError(draft);
        break;
    }
  })
}
