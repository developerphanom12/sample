import { useState } from 'react';
import { useFormik } from 'formik';
import { ActionMeta, SingleValue } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { useDebounce } from 'hooks/useDebounce';
import { useToggle } from 'hooks/useToggle';
import { myAccountValidationScheme } from 'services/validation';
import { IState } from 'services/redux/reducer';

import { getInputFields, USERS_LIST_INITIAL_STATE } from './userList.constants';
import { IuseUserListState } from './types/userList.types';
import {
  createCompanyMember,
  deleteCompanyMember,
  getAllCompanies,
  getCompanyMembers,
} from '../settings.api';
import { setCompanies, setMembers } from '../reducer/settings.reducer';

import { USER_ROLES } from 'constants/strings';

export const useUserListState = () => {
  const formikInitialValues = {
    fullName: '',
    email: '',
  };

  const dispatch = useDispatch();
  const {
    settings: {
      companies,
      companyMembers: { count, members },
    },
  } = useSelector((state: IState) => state);

  const formattedCompanies = companies.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const initialState = {
    ...USERS_LIST_INITIAL_STATE,
    role: null,
    company: null,
  };
  const [state, setState] = useState<IuseUserListState>(initialState);
  const [isEdit, setIsEdit] = useState(false);

  const selectedUser = members.find(
    (member) => member.id === state.selectedItemId
  );

  const [isModalWindowOpen, onModalWindowToggle] = useToggle();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();

  const onModalWindowCancelClickButtonHandler = () => {
    onModalWindowToggle();
    setIsEdit(false);
    formik.resetForm();
  };

  const onModalWindowToggleHandler = () => {
    onModalWindowToggle();
    onGetCompaniesHandler();
  };

  const onGetCompaniesHandler = async () => {
    try {
      const { data: companiesData } = await getAllCompanies();
      dispatch(setCompanies(companiesData));
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeStateFieldHandler = (
    optionName: keyof typeof initialState,
    value: string | boolean | number | SingleValue<IOption> | IMember[]
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const onChangeRoleValueHandler = (
    newValue: IOption,
    actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('role', newValue);

  const onChangeCompanyValueHandler = (
    newValue: IOption,
    actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('company', newValue);

  const onGetAllCompanyMembersHandler = async (
    params?: ISearchParams,
    isSearching?: boolean
  ) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const { data } = await getCompanyMembers(params);

      isSearching && state.isFocus
        ? onChangeStateFieldHandler('searchedUsers', data.data)
        : dispatch(setMembers({ count: data.count, members: data.data }));

      setState((prevState) => ({
        ...prevState,
        isSearching: false,
        isLoading: false,
        isContentLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeItemsPerPage = (newValue: SingleValue<IOption>) => {
    onChangeStateFieldHandler('itemsPerPage', newValue);
    onChangeStateFieldHandler('isContentLoading', true);
    onChangeStateFieldHandler('searchValue', '');

    onChangeStateFieldHandler('currentPage', initialState.currentPage);
    if (!count) return;
    onChangePagesAmount(Number(newValue?.value), count);
  };

  const onChangePage = (data: IPaginationData) => {
    const selected = data.selected;
    setState((prevState) => ({
      ...prevState,
      currentPage: selected,
      skipReceipts: selected * Number(state.itemsPerPage.value),
      isContentLoading: true,
    }));
  };

  const onChangePagesAmount = (itemsCount: number, count: number) => {
    if (!count) return;
    onChangeStateFieldHandler('pages', Math.ceil(count / itemsCount));
  };

  const onChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('inputPaginationValue', event.target.value);

  const onEnterGoToClick = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    onGoToClick();
  };

  const onGoToClick = () => {
    if (Number(state.inputPaginationValue) === state.currentPage + 1) {
      onChangeStateFieldHandler(
        'inputPaginationValue',
        initialState.inputPaginationValue
      );
      return;
    }
    if (Number(state.inputPaginationValue) <= state.pages) {
      const goTo = Number(state.inputPaginationValue);
      onChangePage({ selected: goTo - 1 });
      onChangeStateFieldHandler(
        'currentPage',
        Number(state.inputPaginationValue) - 1
      );
    }
    onChangeStateFieldHandler(
      'inputPaginationValue',
      initialState.inputPaginationValue
    );
  };

  const onForwardClick = () => {
    if (state.currentPage === state.pages - 1) return;
    const forward = state.currentPage + 5;
    if (forward < state.pages) {
      onChangePage({ selected: forward });
    } else {
      onChangePage({ selected: state.pages - 1 });
    }
  };

  const onBackwardClick = () => {
    if (state.currentPage === 0) return;
    const backward = state.currentPage - 5;
    if (backward < 0) {
      onChangePage({ selected: 0 });
    } else {
      onChangePage({ selected: backward });
    }
  };

  const debouncedValue = useDebounce(state.searchValue, 250);

  const onEnterInsertUser = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    formik.handleSubmit();
  };

  const onChangeSearchValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
      isContentLoading: true,
      isSearching: true,
    }));
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: (values) => onInviteUserToCompanyHandler(values),
    validationSchema: myAccountValidationScheme,
    validateOnBlur: true,
  });

  const onDeleteIconClickHandler = async (itemId: string) => {
    try {
      onChangeStateFieldHandler('selectedItemId', itemId);
      onDeleteModalWindowToggle();
    } catch (error) {
      console.log(error);
    }
  };

  const onEditIconClickHandler = async (itemId: string) => {
    try {
      onChangeStateFieldHandler('selectedItemId', itemId);
      setIsEdit(true);
      onModalWindowToggle();
    } catch (error) {
      console.log(error);
      setIsEdit(false);
    }
  };

  const onClickDeleteUserButton = async () => {
    try {
      await deleteCompanyMember(selectedUser?.id || '');
    } catch (error) {
      console.log(error);
    }
  };

  const onInviteUserToCompanyHandler = async (
    values: typeof formikInitialValues
  ) => {
    try {
      const payload = {
        email: values.email,
        name: values.fullName,
        role: 'admin',
      };
      await createCompanyMember(payload);
    } catch (error) {
      console.log(error);
    }
  };

  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);

  const modalFields = getInputFields({
    options: [USER_ROLES, formattedCompanies],
    state: { role: state.role, company: state.company },
    funcArray: [onChangeRoleValueHandler, onChangeCompanyValueHandler],
  });

  return {
    ...state,
    isEdit,
    onModalWindowCancelClickButtonHandler,
    selectedUser,
    modalFields,
    onModalWindowToggleHandler,
    onBlurHandler,
    onFocusSearchHandler,
    onClickDeleteUserButton,
    formik,
    members,
    onInviteUserToCompanyHandler,
    onGetAllCompanyMembersHandler,
    debouncedValue,
    onEditIconClickHandler,
    onDeleteIconClickHandler,
    onModalWindowToggle,
    onDeleteModalWindowToggle,
    isModalWindowOpen,
    isDeleteModalWindowOpen,
    onChangeSearchValueHandler,
    onEnterInsertUser,
    onChangeInputValue,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onChangeItemsPerPage,
    onGoToClick,
  };
};
