import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type messageType = {
  +message: string
}

export type Action = {
  +type: string
};

export type MessageType = () => messageType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
