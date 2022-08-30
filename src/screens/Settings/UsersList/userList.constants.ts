import { PAGINATION_ARRAY } from 'constants/pagination-array';

import {
  IgetInputFieldsProps,
  IuseUserListState,
} from './types/userList.types';

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
  isSearching: false,
  isFocus: false,
  isEdit: false,
  selectedItemId: '',
  searchedUsers: [],
  isFetchingData: true,
  role: null,
  companies: [],
  prevRole: null,
  selectedUserName: '',
  prevName: '',
  prevEmail: '',
  inviteToken: '',
  isInvitation: false,
};

export const formikInitialValues = {
  fullName: '',
  email: '',
};

export const getInputFields = (props: IgetInputFieldsProps) => {
  const { options, funcArray, state } = props;
  return [
    {
      type: 'input',
      label: 'Full Name',
      name: 'fullName',
    },
    {
      type: 'input',
      label: 'Email',
      name: 'email',
    },
    {
      type: 'select',
      name: 'select',
      label: 'Role',
      value: state.role,
      options: options[0],
      onChangeSelect: funcArray[0],
    },
    {
      type: 'select',
      name: 'company',
      label: 'Company',
      value: state?.companies || undefined,
      isMulti: true,
      options: options[1],
      onChangeSelect: funcArray[1],
    },
  ];
};
