import {push} from 'react-router-redux';

export const FRIEND = 'go_to_friend';

export function friendDashboard(id) {
  return async dispatch => {
    console.log('La');
    dispatch({
      type: FRIEND,
      payload: {id}
    });
    dispatch(push('/dashboardfriend'));
  };
};
