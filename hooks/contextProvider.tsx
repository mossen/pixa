import * as React from 'react';
import { Photos } from 'types';

export enum ACTIONS {
  UPDATE_DATA,
  UPDATE_KEYWORD,
}

export interface State {
  data: Photos;
  keyword: string;
}

type Actions =
  | { type: ACTIONS.UPDATE_DATA; payload: {data:Photos, keyword?: string} }
  | { type: ACTIONS.UPDATE_KEYWORD; payload: {keyword: string} };


const Context = React.createContext({ state: null });

export const ContextProvider = <State extends unknown, Action extends unknown>({
  children,
  reducer,
  initialState,
}: {
  children: React.ReactNode;
  initialState: State;
  reducer: (state: State, action: Action) => any;
}): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useContext = (): {
  state: State;
  dispatch: React.Dispatch<Actions>;
} => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error('context must be used within a CountProvider');
  }

  return context as unknown as {
    state: State;
    dispatch: React.Dispatch<Actions>;
  };
};

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case ACTIONS.UPDATE_DATA:
      return {...state, ...action.payload};
    case ACTIONS.UPDATE_KEYWORD:
      return {...state, ...action.payload};

    default: {
      return state;
    }
  }
};
