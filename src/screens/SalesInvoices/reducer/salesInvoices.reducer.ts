import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  // ISalesInvoice,
  IINVOICE_INITIAL_STATE
} from '../types/salesInvoices.types';

export const SALES_INVOICES_INITIAL_STATE: IINVOICE_INITIAL_STATE = {
  count: null,
  totalCount: null,
  invoicesList: [],
  selectedInvoice: null,
  selectedInvoiceIndex: null,
  isAllChecked: false,
  isFetchingData: false,
  isCompanyChanged: false,
};

export const SalesInvoicesSlice = createSlice({
  name: 'salesInvoicesSlice',
  initialState: SALES_INVOICES_INITIAL_STATE,
  reducers: {
    setInvoicesList: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<{
        count: number;
        data: IInvoice[];
        totalCount: number;
      }>
    ) => {
      state.totalCount = action.payload.totalCount;
      state.count = action.payload.count;
      state.invoicesList = action.payload.data.map((invoice) => ({
        ...invoice,
        isChecked: false,
      }));
      state.isAllChecked = false;
    },
    setCheckedItem: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      state.invoicesList = state.invoicesList.map((receipt) =>
        receipt.id === action.payload
          ? {
              ...receipt,
              isChecked: !receipt.isChecked,
            }
          : receipt
      );
      const isCheckedArr = state.invoicesList.filter(
        (item) => item.isChecked === true
      );
      state.isAllChecked = isCheckedArr.length === state.invoicesList.length;
    },
    setCheckedAllItems: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.invoicesList = state.invoicesList.map((receipt) => ({
        ...receipt,
        isChecked: action.payload,
      }));
      state.isAllChecked = action.payload;
    },
    updateReceipt: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<IInvoice>
    ) => {
      state.invoicesList = state.invoicesList.map((receipt) =>
        receipt.id === action.payload.id ? action.payload : receipt
      );
    },
    selectReceiptWithId: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<string>
    ) => {
      const activeIndex = state.invoicesList.findIndex(
        (item) => item.id === action.payload
      );
      state.selectedInvoiceIndex = activeIndex;
      state.selectedInvoice =
        state.invoicesList.find((item, index) => index === activeIndex) || null;
    },
    selectReceipt: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<number>
    ) => {
      state.selectedInvoiceIndex = action.payload;
      state.selectedInvoice =
        state.invoicesList.find((item, index) => index === action.payload) || null;
    },
    setIsFetchingDate: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isFetchingData = action.payload;
    },
    setIsCompanyChanged: (
      state: IINVOICE_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isCompanyChanged = action.payload;
    },
  },
});

export const { setInvoicesList, setIsCompanyChanged, setIsFetchingDate } = SalesInvoicesSlice.actions;

export const salesInvoicesReducer = SalesInvoicesSlice.reducer;
