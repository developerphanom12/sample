import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISETTINGS_INITIAL_STATE } from '../types/settings.types';

export const SETTINGS_INITIAL_STATE: ISETTINGS_INITIAL_STATE = {
  companyMembers: { members: [], count: null },
  companies: [],
  currentMember: null,
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
    setCurrentMember: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      state.currentMember =
        state.companyMembers.members.find(
          (member) => member.id === action.payload
        ) || null;
    },
  },
});

export const { setMembers, setCompanies, setCurrentMember } =
  SettingsSlice.actions;

export const SettingsReducer = SettingsSlice.reducer;
