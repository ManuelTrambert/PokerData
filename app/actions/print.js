// @flow
import type { Dispatch } from '../reducers/types';

export const PRINT_EMPTY = 'PRINT_EMPTY';
export const PRINT_STRING = 'PRINT_STRING';

export function print_string() {
  return {
    type: PRINT_STRING
  };
}

export function print_empty() {
  return {
    type: PRINT_EMPTY
  };
}
