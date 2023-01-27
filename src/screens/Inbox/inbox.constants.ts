import { PAGINATION_ARRAY } from 'constants/pagination-array';

export const statusFilterOptions = [
  { value: 'all', label: `All` },
  { value: 'processing', label: `Processing` },
  { value: 'accepted', label: `Accepted` },
  { value: 'review', label: `Review` },
  { value: 'rejected', label: `Rejected` },
];

export const formikInitialValues = {
  to: '',
  subject: '',
  message: '',
};

export const emailInputs = [
  {
    labelText: 'To',
    inputName: 'to',
  },
  {
    labelText: 'Subject',
    inputName: 'subject',
  },
  {
    labelText: 'Message',
    inputName: 'message',
    isTextArea: true,
    inputHeight: '159px',
  },
];

export const INITIAL_STATE = {
  statusValue: { value: 'all', label: 'Status - All' },
  searchValue: '',
  dateValue: null,
  formattedDate: '',
  showActions: false,
  checkedIds: [],
  isLoading: false,
  receiptsToSend: [],
  excelUrl: '',
  csvData: '',
  isFetchingReceipts: true,
  isContentLoading: false,
};

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
export const todayDateReceiptToEmail = `Receiptlist-${dd + mm + yyyy}_XLSX`;

export const mockedReceipts = [
  {
    category: null,
    currency: 'ICurrency',
    description: null,
    id: '1',
    custom_id: 'rc1',
    net: null,
    photos: [],
    receipt_date: new Date(),
    status: 'review',
    supplier: null,
    supplier_account: null,
    tax: null,
    total: null,
    payment_type: null,
    vat_code: null,
    publish_status: false,
    payment_status: false,
    isChecked: false,
  },
];
