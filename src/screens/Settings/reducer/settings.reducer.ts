import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ICompanySettings,
  ISETTINGS_INITIAL_STATE,
} from '../types/settings.types';

export const SETTINGS_INITIAL_STATE: ISETTINGS_INITIAL_STATE = {
  companyMembers: { members: [], count: null },
  companies: [],
};

const initialState = SETTINGS_INITIAL_STATE;

export const SettingsSlice = createSlice({
  name: 'masterSlice',
  initialState,
  reducers: {
    setMembers: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<{ members: IMember[]; count: number }>
    ) => {
      state.companyMembers.members = action.payload.members;
      state.companyMembers.count = action.payload.count;
    },
    setCompanies: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<ICompanySettings[]>
    ) => {
      state.companies = action.payload;
    },
  },
});

export const {
  setMembers,
  setCompanies,
} = SettingsSlice.actions;

export const SettingsReducer = SettingsSlice.reducer;
