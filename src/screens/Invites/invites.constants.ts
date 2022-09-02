import { PAGINATION_ARRAY } from 'constants/pagination-array';
import { IgetInputFieldsProps } from './types/invites.types';

export const INVITES_INITIAL_STATE = {
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
  isSearching: false,
  isFocus: false,
  isEdit: false,
  selectedItemId: '',
  searchedInvites: [],
  isFetchingData: true,
  role: null,
  companies: [],
  prevRole: null,
  selectedEmail: '',
  prevName: '',
  prevEmail: '',
  isEmptyData: true,
};

export const formikInitialValues = {
  email: '',
};

export const getInputFields = (props: IgetInputFieldsProps) => {
  const { options, onChangeSelectHandler, state } = props;
  return [
    {
      type: 'input',
      label: 'Email',
      name: 'email',
    },
    {
      type: 'select',
      name: 'select',
      label: 'Your role in company',
      value: state.role,
      options: options[0],
      onChangeSelect: onChangeSelectHandler,
    },
  ];
};
