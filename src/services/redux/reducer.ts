import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

export interface IState {}

const combineReducer = combineReducers({});

const reducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return combineReducer(state, action);
};

export const rootReducer = persistReducer(persistConfig, reducer);
