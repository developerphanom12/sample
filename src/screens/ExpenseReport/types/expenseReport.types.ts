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
  
  export interface IuseReportState {
    isEdit?: boolean;
    searchValue: string;
    isLoading: boolean;
    isEmptyData?: boolean;
    isFetchingReports?: boolean;
    isContentLoading?: boolean;
    isFocus?: boolean;
    checkedReportIds: string[];
    searchedItems: ITabItem[];
    isSearching: boolean;
    modalReportFormType: number;
    modalInputReportFor: string;
    modalInputReportDate: Date | null | string;
    modalInputReportName: string;
  }

  export interface ICreateReportApi {
    report_for: string;
    report_date: Date | null | string;
    report_name: string;
    report_receipt?: string[];
    active_account?: string | null;
  }
  export interface IcreateReportHandlerParams {
    active_account?: string;
    search?: string;
    take?: number;
    skip?: number;
  }