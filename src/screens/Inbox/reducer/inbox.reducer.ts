import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IINBOX_INITIAL_STATE } from '../types/inbox.types';

export const INBOX_INITIAL_STATE: IINBOX_INITIAL_STATE = {
  count: null,
  receipts: [],
  selectedReceipt: null,
  selectedReceiptIndex: null,
  isFetchingData: false,
  isAllChecked: false,
};

const initialState = INBOX_INITIAL_STATE;

export const InboxSlice = createSlice({
  name: 'inboxSlice',
  initialState,
  reducers: {
    setReceipts: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<{ count: number; data: IReceipt[] }>
    ) => {
      state.count = action.payload.count;
      state.receipts = action.payload.data.map((receipt) => ({
        ...receipt,
        isChecked: false,
      }));
      state.isAllChecked = false;
    },
    setCheckedItem: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      state.receipts = state.receipts.map((receipt) =>
        receipt.id === action.payload
          ? {
              ...receipt,
              isChecked: !receipt.isChecked,
            }
          : receipt
      );
      const isCheckedArr = state.receipts.filter(
        (item) => item.isChecked === true
      );
      state.isAllChecked = isCheckedArr.length === state.receipts.length;
    },
    setCheckedAllItems: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.receipts = state.receipts.map((receipt) => ({
        ...receipt,
        isChecked: action.payload,
      }));
      state.isAllChecked = action.payload;
    },
    updateReceipt: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<IReceipt>
    ) => {
      state.receipts = state.receipts.map((receipt) =>
        receipt.id === action.payload.id ? action.payload : receipt
      );
    },
    selectReceipt: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<number>
    ) => {
      state.selectedReceiptIndex = action.payload;
      state.selectedReceipt =
        state.receipts.find((item, index) => index === action.payload) || null;
    },
    setIsFetchingDate: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isFetchingData = action.payload;
    },
    updateReceipt: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<IReceipt>
    ) => {
      state.receipts = state.receipts.map((receipt) =>
        receipt.id === action.payload.id ? action.payload : receipt
      );
    },
    selectReceipt: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<number>
    ) => {
      state.selectedReceiptIndex = action.payload;
      state.selectedReceipt =
        state.receipts.find((item, index) => index === action.payload) || null;
    },
    setIsFetchingDate: (
      state: IINBOX_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isFetchingData = action.payload;
    },
  },
});

export const {
  setReceipts,
  selectReceipt,
  setIsFetchingDate,
  updateReceipt,
  setCheckedItem,
  setCheckedAllItems,
} = InboxSlice.actions;

export const inboxReducer = InboxSlice.reducer;
