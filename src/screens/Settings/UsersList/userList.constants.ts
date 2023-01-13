import { IgetInputFieldsProps } from './types/userList.types';

export const USERS_LIST_INITIAL_STATE = {
  searchValue: '',
  isLoading: false,
  isContentLoading: false,
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
      isDisabled: false,
      onChangeSelect: funcArray[0],
    },
    {
      type: 'select',
      name: 'company',
      label: 'Company',
      value: state?.companies || undefined,
      isMulti: true,
      options: options[1],
      isDisabled: false,
      onChangeSelect: funcArray[1],
    },
  ];
};
