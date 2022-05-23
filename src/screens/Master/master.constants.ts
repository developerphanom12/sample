import { PAGINATION_ARRAY } from 'constants/pagination-array';

export const ModalWIndowConstants = {
  addCategory: 'Insert Category',
  editCategory: 'Edit Category',
  addSupplier: 'Insert Supplier',
  editSupplier: 'Edit Supplier',
};

export const TAB_INITIAL_STATE = {
  isEdit: false,
  searchValue: '',
  modalInputValue: '',
  prevInputValue: '',
  isLoading: false,
  itemsPerPage: PAGINATION_ARRAY[1],
  skipReceipts: 0,
  currentPage: 0,
  inputPaginationValue: '',
  pages: 1,
  forwardDisabled: true,
  backwardDisabled: true,
  isEmptyData: false,
  isFetchingData: true,
  isFocus: false,
  isHeaderPanel: false,
  isSearching: false,
  searchedItems: [],
  isContentLoading: false,
};

export const TAB_INITIAL_STATE = {
  isEdit: false,
  searchValue: '',
  modalInputValue: '',
  prevInputValue: '',
  isLoading: false,
};
