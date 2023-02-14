import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ISalesInvoice,
  ISALES_INVOICES_INITIAL_STATE,
} from '../types/salesInvoices.types';

export const SALES_INVOICES_INITIAL_STATE: ISALES_INVOICES_INITIAL_STATE = {
  count: null,
  totalCount: null,
  salesInvoices: [],
  selectedSalesInvoice: null,
  selectedSalesInvoiceIndex: null,
  isAllChecked: false,
  isFetchingData: false, // not sure
  isCompanyChanged: false, // not sure
};

export const SalesInvoicesSlice = createSlice({
  name: 'salesInvoicesSlice',
  initialState: SALES_INVOICES_INITIAL_STATE,
  reducers: {
    setReceipts: (
      state: ISALES_INVOICES_INITIAL_STATE,
      action: PayloadAction<{
        count: number;
        data: IReceipt[];
        totalCount: number;
      }>
    ) => {
      state.totalCount = action.payload.totalCount;
      state.count = action.payload.count;
      state.salesInvoices = action.payload.data.map((invoice) => ({
        ...invoice,
        isChecked: false,
      }));
      state.isAllChecked = false;
    },
    // setCheckedItem: (
    //   state: ISALES_INVOICES_INITIAL_STATE,
    //   action: PayloadAction<string>
    // ) => {
    //   state.receipts = state.receipts.map((receipt) =>
    // write some helper fc for this
    //     receipt.id === action.payload
    //       ? {
    //           ...receipt,
    //           isChecked: !receipt.isChecked,
    //         }
    //       : receipt
    //   );
    //   const isCheckedArr = state.receipts.filter(
    //     (item) => item.isChecked === true
    //   );
    //   state.isAllChecked = isCheckedArr.length === state.receipts.length;
    // },
    // setCheckedAllItems: (
    //   state: ISALES_INVOICES_INITIAL_STATE,
    //   action: PayloadAction<boolean>
    // ) => {
    //   state.receipts = state.receipts.map((receipt) => ({
    //     ...receipt,
    //     isChecked: action.payload,
    //   }));
    //   state.isAllChecked = action.payload;
    // },
    // updateReceipt: (
    //   state: ISALES_INVOICES_INITIAL_STATE,
    //   action: PayloadAction<IReceipt>
    // ) => {
    //   state.receipts = state.receipts.map((receipt) =>
    //     receipt.id === action.payload.id ? action.payload : receipt
    //   );
    // },
    // selectReceiptWithId: (
    //   state: ISALES_INVOICES_INITIAL_STATE,
    //   action: PayloadAction<string>
    // ) => {
    //   const activeIndex = state.receipts.findIndex(
    //     (item) => item.id === action.payload
    //   );
    //   state.selectedReceiptIndex = activeIndex;
    //   state.selectedReceipt =
    //     state.receipts.find((item, index) => index === activeIndex) || null;
    // },
    // selectReceipt: (
    //   state: ISALES_INVOICES_INITIAL_STATE,
    //   action: PayloadAction<number>
    // ) => {
    //   state.selectedReceiptIndex = action.payload;
    //   state.selectedReceipt =
    //     state.receipts.find((item, index) => index === action.payload) || null;
    // },
    // setIsFetchingDate: (
    //   state: IINBOX_INITIAL_STATE,
    //   action: PayloadAction<boolean>
    // ) => {
    //   state.isFetchingData = action.payload;
    // },
    // setIsCompanyChanged: (
    //   state: IINBOX_INITIAL_STATE,
    //   action: PayloadAction<boolean>
    // ) => {
    //   state.isCompanyChanged = action.payload;
    // },
  },
});

export const { setReceipts } = SalesInvoicesSlice.actions;

export const salesInvoicesReducer = SalesInvoicesSlice.reducer;
