import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { signUpUserReducer } from 'screens/SignUp/reducer/signup.reducer';
import {
  ISIGN_UP_USER_INITIAL_STATE,
  IUser,
} from 'screens/SignUp/types/signup.types';
import { capiumLoginReducer } from 'screens/CapiumLogin/reducer/capiumLogin.reducer';
import { ICAPIUM_LOGIN_ACCOUNT_INITIAL_STATE } from 'screens/CapiumLogin/types/capiumLogin.types';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'capiumLoginAccount'],
};

export interface IState {
  user: IUser;
  capiumLoginAccount: ICAPIUM_LOGIN_ACCOUNT_INITIAL_STATE;
}

const combineReducer = combineReducers({
  user: signUpUserReducer,
  capiumLoginAccount: capiumLoginReducer,
});

const reducer = (
  state:
    | CombinedState<{
        user: ISIGN_UP_USER_INITIAL_STATE;
        capiumLoginAccount: ICAPIUM_LOGIN_ACCOUNT_INITIAL_STATE;
      }>
    | undefined,
  action: AnyAction
) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return combineReducer(state, action);
};

export const rootReducer = persistReducer(persistConfig, reducer);
