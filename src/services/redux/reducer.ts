import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  signUpUserReducer,
  SIGN_UP_USER_INITIAL_STATE,
} from 'screens/SignUp/reducer/signup.reducer';
import { ISIGN_UP_USER_INITIAL_STATE } from 'screens/SignUp/types/signup.types';
import { capiumLoginReducer } from 'screens/CapiumLogin/reducer/capiumLogin.reducer';
import { ICAPIUM_LOGIN_ACCOUNT_INITIAL_STATE } from 'screens/CapiumLogin/types/capiumLogin.types';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'capiumLoginAccount'],
};

export interface IState {
  user: ISIGN_UP_USER_INITIAL_STATE;
  capiumLoginAccount: ICAPIUM_LOGIN_ACCOUNT_INITIAL_STATE;
}

const combineReducer = combineReducers<IState>({
  user: signUpUserReducer,
  capiumLoginAccount: capiumLoginReducer,
});

export type combineReducerType = ReturnType<typeof combineReducer>;

const reducer = (state: combineReducerType | undefined, action: AnyAction) => {
  if (action.type === 'LOGOUT') {
    if (state) {
      state = {
        ...state,
        user: SIGN_UP_USER_INITIAL_STATE,
      };
    }
  }
  return combineReducer(state, action);
};

export const rootReducer = persistReducer(persistConfig, reducer);
