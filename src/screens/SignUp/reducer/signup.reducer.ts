import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ICurrency,
  ISIGN_UP_USER_INITIAL_STATE,
  ISocialAccount,
  ISwitchAccount,
  IUpdateUserProfile,
  IUser,
  IUserInfo,
} from '../types/signup.types';

export const SIGN_UP_USER_INITIAL_STATE: ISIGN_UP_USER_INITIAL_STATE = {
  user: {
    email: '',
    password: '',
    fullName: '',
    country: '',
    id: '',
    accounts: null,
    active_account: null,
    socialAuth: null,
    profile_image: '',
  },
  token: '',
  socialAccount: {
    capiumEmail: '',
    capiumId: '',
    id: '',
  },
  userInfo: {
    account: { id: '', name: '', role: '' },
    company: {
      currency: {
        country: '',
        description: '',
        id: '',
        value: '',
      },
      created: '',
      date_format: '',
      id: '',
      name: '',
      logo: '',
    },
  },
  currencies: [
    {
      country: '',
      description: '',
      id: '',
      value: '',
    },
  ],
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
    updateUser: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<IUser>
    ) => {
      state.user = action.payload;
    },
    setUserInfo: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<IUserInfo>
    ) => {
      state.userInfo.account = action.payload.account;
      state.userInfo.company = action.payload.company;
    },
    setCompany: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<ICompany>
    ) => {
      state.userInfo.company = action.payload;
    },
    setSocialAccount: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<ISocialAccount>
    ) => (state = { ...state, ...action.payload }),
    setCurrencies: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<ICurrency[]>
    ) => {
      state.currencies = action.payload;
    },
    updateUserProfile: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<IUpdateUserProfile>
    ) => {
      const { user, company } = action.payload;
      state.user.email = user.email;
      state.user.country = user.country;
      state.user.fullName = user.fullName;
      state.userInfo.company.currency = company.currency;
      state.userInfo.company.date_format = company.date_format;
    },
    setUserAvatar: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      state.user.profile_image = action.payload;
    },
    switchAccount: (
      state: ISIGN_UP_USER_INITIAL_STATE,
      action: PayloadAction<ISwitchAccount>
    ) => {
      state.user = { ...state.user, ...action.payload.user };
      state.userInfo.company = {
        ...state.userInfo.company,
        ...action.payload.company,
      };
    },
  },
});

export const {
  setUser,
  setSocialAccount,
  updateUser,
  setUserInfo,
  setCurrencies,
  setCompany,
  updateUserProfile,
  setUserAvatar,
  switchAccount,
} = SignUpUserSlice.actions;

export const signUpUserReducer = SignUpUserSlice.reducer;
