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
  isFetchingData: false,
  isCompanyChanged: false,
};

export const SalesInvoicesSlice = createSlice({
  name: 'salesInvoicesSlice',
  initialState: SALES_INVOICES_INITIAL_STATE,
  reducers: {
    setReceipts: (
      state: ISALES_INVOICES_INITIAL_STATE,
      action: PayloadAction<{
        count: number;
        data: ISalesInvoice[];
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
  },
});

export const { setReceipts } = SalesInvoicesSlice.actions;

export const salesInvoicesReducer = SalesInvoicesSlice.reducer;
