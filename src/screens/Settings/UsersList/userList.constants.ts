import { PAGINATION_ARRAY } from 'constants/pagination-array';

export const USERS_LIST_INITIAL_STATE = {
  searchValue: '',
  isLoading: false,
  isContentLoading: false,
  itemsPerPage: PAGINATION_ARRAY[1],
  skipItems: 0,
  currentPage: 0,
  pages: 1,
  forwardDisabled: true,
  backwardDisabled: true,
  inputPaginationValue: '',
};
