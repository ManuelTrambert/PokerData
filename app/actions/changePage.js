import {push} from 'react-router-redux';

export function goTo(where) {
  return async dispatch => {
    dispatch(push(where));
  };
};
