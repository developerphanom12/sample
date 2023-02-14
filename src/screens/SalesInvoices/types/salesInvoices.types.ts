import { IINBOX_INITIAL_STATE } from '../../Inbox/types/inbox.types';
import { ICurrency } from '../../SignUp/types/signup.types';


export interface ISalesInvoice {
  // category: ISelectItem | null;
  currency: ICurrency;
  description: string | null;
  id: string;
  custom_id: string;
  net: number | null;
  photos: string[];
  receipt_date: Date;
  status: string;
  supplier: string | null;
  // supplier_account: ISelectItem | null;
  tax: number | null;
  total: number | null;
  // payment_type: ISelectItem | null;
  vat_code: string | null;
  publish_status: boolean;
  payment_status: boolean;
  isChecked: boolean;
}
export interface ISALES_INVOICES_INITIAL_STATE
  extends Omit<
    IINBOX_INITIAL_STATE,
    'receipts' | 'selectedReceipt' | 'selectedReceiptIndex'
  > {
  salesInvoices: ISalesInvoice[];
  selectedSalesInvoice: ISalesInvoice | null;
  selectedSalesInvoiceIndex: number | null;
}

export interface IuseSalesInvoicesState {
  isFetchingData: boolean;
  statusValue: {
    value: string;
    label: string;
  };
  isContentLoading: boolean;
  searchValue: string;
  dateValue: Date | null;
  formattedDate: string;
  showActions: boolean;
  checkedIds: string[];
  isLoading: boolean;
  csvData: string;
  dataToSend: string[];
  excelUrl: string;
}