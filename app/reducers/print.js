// @flow
import { PRINT_EMPTY, PRINT_STRING } from '../actions/print';
import type { Action } from './types';

export default function print(message: string = '', action: Action) {
  console.log('Message : ', message, 'Action : ', action);
  switch (action.type) {
    case PRINT_EMPTY:
      return console.log('');
    case PRINT_STRING:
      return console.log(message);
    default:
      return '';
  }
}
