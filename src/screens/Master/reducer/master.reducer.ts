import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMASTER_INITIAL_STATE } from '../types/master.types';

export const MASTER_INITIAL_STATE: IMASTER_INITIAL_STATE = {
  categories: { data: [], count: null },
  suppliers: { data: [], count: null },
  types: { data: [], count: null },
  selectedCategory: null,
  activeTabName: 'Categories',
};

const initialState = MASTER_INITIAL_STATE;

export const MasterSlice = createSlice({
  name: 'masterSlice',
  initialState,
  reducers: {
    setCategoriesForSelect: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<{ data: ITabItem[]; count: number }>
    ) => {
      state.categories.data = action.payload.data;
      state.categories.count = action.payload.count;
    },
    setSuppliers: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<{ data: ITabItem[]; count: number }>
    ) => {
      state.suppliers.data = action.payload.data;
      state.suppliers.count = action.payload.count;
    },
    setTypes: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<{ data: ITabItem[]; count: number }>
    ) => {
      state.types.data = action.payload.data;
      state.types.count = action.payload.count;
    },
    setTabItem: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<ITabItem>
    ) => {
      state.selectedCategory = action.payload;
    },
    setActiveTab: (
      state: IMASTER_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      state.activeTabName = action.payload;
    },
  },
});

export const {
  setCategoriesForSelect,
  setSuppliers,
  setTypes,
  setTabItem,
  setActiveTab,
} = MasterSlice.actions;

export const MasterReducer = MasterSlice.reducer;
