import { SingleValue } from 'react-select';
import { IOption } from 'components/CustomSelect/types';

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
  status?: string;
  search?: string;
  date_start?: string;
  date_end?: string;
  take?: number;
  skip?: number;
}

export interface IPostEmail {
  receipts: string[];
  to: string;
  subject: string;
  message?: string;
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
  receiptsPerPage: SingleValue<IOption> | any;
  skipReceipts: number;
  currentPage: number;
  inputPaginationValue: string;
  pages: number;
  checkedIds: string[];
  isLoading: boolean;
  csvData: string;
  receiptsToSend: string[];
  excelUrl: string;
}
