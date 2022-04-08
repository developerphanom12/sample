import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ISIGN_UP_USER_INITIAL_STATE,
  ISocialAccount,
} from '../types/signup.types';

export const SIGN_UP_USER_INITIAL_STATE: ISIGN_UP_USER_INITIAL_STATE = {
  user: {
    email: '',
    password: '',
    fullName: '',
    country: '',
    id: '',
  },
  token: '',
  socialAccount: {
    capiumEmail: '',
    capiumId: '',
    id: '',
  },
};

const initialState = SIGN_UP_USER_INITIAL_STATE;

export const SignUpUserSlice = createSlice({
  name: 'signUpUserSlice',
  initialState,
  reducers: {
    setUser: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<ISIGN_UP_USER_INITIAL_STATE>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setSocialAccount: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<ISocialAccount>
    ) => (state = { ...state, ...action.payload }),
  },
});

export const { setUser, setSocialAccount } = SignUpUserSlice.actions;

export const signUpUserReducer = SignUpUserSlice.reducer;
