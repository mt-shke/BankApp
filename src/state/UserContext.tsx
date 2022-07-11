import React, {createContext, useReducer} from 'react';
import {IUser} from '../ts/interfaces';

const initialState: any = {
  user: '',
};

export type TUserAction =
  // | {type: 'LOGIN_USER'; payload: {email: string}}
  {type: 'LOGIN_USER'; payload: {user: any}} | {type: 'LOGOUT_USER'};

export const UserContext = createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<TUserAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: typeof initialState, action: TUserAction) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {user: action.payload.user};
    case 'LOGOUT_USER':
      return null;
    default:
      throw new Error('Something went wrong in the userState reducer ');
  }
};

interface IUserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({children}: IUserProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // todo to fix

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
