import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISIGN_UP_USER_INITIAL_STATE } from '../types/signup.types';

export const SIGN_UP_USER_INITIAL_STATE: ISIGN_UP_USER_INITIAL_STATE = {
  user: {
    email: '',
    password: '',
    fullName: '',
    country: '',
    id: '',
  },
  token: '',
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
  },
});

export const { setUser } = SignUpUserSlice.actions;

export const signUpUserReducer = SignUpUserSlice.reducer;
