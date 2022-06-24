import { PAGINATION_ARRAY } from 'constants/pagination-array';

export const COMPANY_LIST_INITIAL_STATE = {
  companyName: '',
  searchValue: '',
  isLoading: false,
  isContentLoading: false,
  logoSrc: '',
  logoName: '',
  isEdit: false,

  itemsPerPage: PAGINATION_ARRAY[1],
  skipItems: 0,
  currentPage: 0,
  pages: 1,
  forwardDisabled: true,
  backwardDisabled: true,
  inputPaginationValue: '',
};
