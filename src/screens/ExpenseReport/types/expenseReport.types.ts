import { ICurrency } from '../../SignUp/types/signup.types';

export interface IExpenseReport {
    currency: ICurrency;
    id: string;
    custom_id: string;
    net: number | null;
    photos: string[];
    invoice_date: Date;
    due_date: Date;
    status: string;
    supplier: string | null;
    tax: number | null;
    total: number | null;
    vat_code: string | null;
    publish_status: boolean;
    payment_status: boolean;
    isChecked: boolean;
}

export interface ISelectItemReport {
    id: string;
    created: string;
    name: string;
  }
  
  export interface IREPORT_INITIAL_STATE {
    count: number | null;
    totalCount: number | null;
    reportsList: IReceipt[];
    selectedReport: IReceipt | null;
    selectedReportIndex: number | null;
    isFetchingReportData: boolean;
    isAllChecked: boolean;
    isCompanyChanged: boolean;
  }
  
  export interface IGetReportParams {
    active_account?: string;
    status?: string;
    date_filter?: string;
    search?: string;
    date_start?: string;
    date_end?: string;
    take?: number;
    skip?: number;
  }
  
  export interface IPostEmailReport {
    active_account: string;
    message?: string;
    receipts: string[];
    to: string;
    subject: string;
  }
  
  export interface IuseReportState {
    isFetchingReceipts: boolean;
    statusValue: {
      value: string;
      label: string;
    };
    dateFilterValue: {
      value: string;
      label: string;
    };
    isContentLoading: boolean;
    searchValue: string;
    dateValue: Date | null;
    dateRangeValue: Date[] | null;
    formattedDate: string;
    isInputDate: boolean;
    showActions: boolean;
    checkedIds: string[];
    isLoading: boolean;
    csvData: string;
    receiptsToSend: string[];
    excelUrl: string;
  }

  export interface ICreateExpense {
    report_for: string;
    date: string;
    report_name: string;
    active_account?: string | null;
  }