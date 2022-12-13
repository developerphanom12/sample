export interface ISelectItem {
  id: string;
  created: string;
  name: string;
}

export interface IINBOX_INITIAL_STATE {
  count: number | null;
  receipts: IReceipt[];
  selectedReceipt: IReceipt | null;
  selectedReceiptIndex: number | null;
  isFetchingData: boolean;
  isAllChecked: boolean;
}

export interface IGetReceiptsParams {
  active_account?: string;
  status?: string;
  search?: string;
  date_start?: string;
  date_end?: string;
  take?: number;
  skip?: number;
}

export interface IPostEmail {
  active_account: string;
  message?: string;
  receipts: string[];
  to: string;
  subject: string;
}

export interface IuseInboxState {
  isFetchingReceipts: boolean;
  isContentVisible: boolean;
  isVisited: boolean;
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
  receiptsToSend: string[];
  excelUrl: string;
}
