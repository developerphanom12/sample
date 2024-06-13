export const INITIAL_STATE = {
  statusValue: { value: 'all', label: 'Status - All' },
  dateFilterValue: { value: 'all', label: 'Date - All' },
  searchValue: '',
  dateValue: null,
  formattedDate: '',
  isInputDate: false,
  showActions: false,
  checkedIds: [],
  isLoading: false,
  dataToSend: [],
  excelUrl: '',
  csvData: '',
  isFetchingData: true,
  isContentLoading: false,
};

export const formikInitialValues = {
  to: '',
  subject: '',
  message: '',
};