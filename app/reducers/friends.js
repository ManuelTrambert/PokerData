import produce from 'immer';
import {FRIEND} from '../actions/friend';

function setFriendId(draftState, credentials) {
  console.log(credentials, ':', draftState);
  draftState.id = credentials.id;
}


export default function (state = {}, action) {
  return produce(state, draft => {
    switch (action.type) {
      case FRIEND:
        setFriendId(draft, action.payload);
        break;
    }
  })
}
