import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { signUpUserReducer } from 'screens/SignUp/reducer/signup.reducer';
import {
  ISIGN_UP_USER_INITIAL_STATE,
  IUser,
} from 'screens/SignUp/types/signup.types';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

export interface IState {
  user: IUser;
}

const combineReducer = combineReducers({
  user: signUpUserReducer,
});

const reducer = (
  state: CombinedState<{ user: ISIGN_UP_USER_INITIAL_STATE }> | undefined,
  action: AnyAction
) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return combineReducer(state, action);
};

export const rootReducer = persistReducer(persistConfig, reducer);
