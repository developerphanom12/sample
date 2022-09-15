import { useState } from 'react';
import { useFormik } from 'formik';
import { ActionMeta, SingleValue } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { useDebounce } from 'hooks/useDebounce';
import { useToggle } from 'hooks/useToggle';

import { myAccountValidationScheme } from 'services/validation';
import { IState } from 'services/redux/reducer';
import {
  getFirstLetterUppercase,
  getSelectedUser,
  getUserRole,
} from 'services/utils';

import {
  formikInitialValues,
  getInputFields,
  USERS_LIST_INITIAL_STATE,
} from './userList.constants';
import { IuseUserListState } from './types/userList.types';
import {
  createCompanyMember,
  deleteCompanyMember,
  getCompanyMembers,
  getManyCompanies,
  resendInvitation,
  updateCompanyMember,
} from '../settings.api';
import { setCompanies, setMembers } from '../reducer/settings.reducer';

import { USER_ROLES } from 'constants/strings';

export const useUserListState = () => {
  const dispatch = useDispatch();
  const {
    user: {
      user: { active_account, accounts },
    },
    settings: {
      companies,
      companyMembers: { count, members },
    },
  } = useSelector((state: IState) => state);

  const userRole = getUserRole(accounts || [], active_account || '');

  const formattedCompanies = companies?.companies?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const initialState = USERS_LIST_INITIAL_STATE;

  const [state, setState] = useState<IuseUserListState>(initialState);
  const [isEdit, setIsEdit] = useState(false);
  const [isModalWindowOpen, onModalWindowToggle] = useToggle();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();
  const [isSentSuccessPopup, setIsSentSuccessPopup] = useToggle();
  const [isResentSuccessPopup, setIsResendSuccessPopup] = useToggle();

  const onModalWindowCancelClickButtonHandler = () => {
    onModalWindowToggle();
    setIsEdit(false);
    onChangeStateFieldHandler('role', { value: '', label: '' });
    onChangeStateFieldHandler('companies', null);
    onChangeStateFieldHandler('isInvitation', false);
    formik.resetForm();
  };

  const onModalWindowToggleHandler = () => {
    onGetCompaniesHandler();
    onModalWindowToggle();
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
  ) => onChangeStateFieldHandler('companies', newValue);

  const onGetCompaniesHandler = async () => {
    try {
      const { data: companiesData } = await getManyCompanies({});
      dispatch(
        setCompanies({
          companies: companiesData.data,
          count: companiesData.count,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onGetAllCompanyMembersHandler = async (params?: ISearchParams) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const { data } = await getCompanyMembers(params);
      state.isSearching && state.isFocus
        ? onChangeStateFieldHandler('searchedUsers', data.data)
        : dispatch(setMembers({ count: data.count, members: data.data }));
      setState((prevState) => ({
        ...prevState,
        isSearching: false,
        isLoading: false,
        isFetchingData: false,
        isContentLoading: false,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isSearching: false,
        isLoading: false,
        isFetchingData: false,
        isContentLoading: false,
      }));
      console.log(error);
    }
  };

  const onChangeItemsPerPage = (newValue: SingleValue<IOption>) => {
    onChangeStateFieldHandler('itemsPerPage', newValue);
    onChangeStateFieldHandler('isContentLoading', true);
    onChangeStateFieldHandler('searchValue', '');
    onChangeStateFieldHandler('isFocus', true);
    onGetAllCompanyMembersHandler({ take: Number(newValue?.value) });
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
    onGetAllCompanyMembersHandler({
      take: Number(state.itemsPerPage.value),
      skip: selected * Number(state.itemsPerPage.value),
    });
  };

  const onChangePagesAmount = (itemsCount: number, count: number) => {
    if (!count) return;
    onChangeStateFieldHandler('pages', Math.ceil(count / itemsCount));
  };

  const onChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('inputPaginationValue', event.target.value);

  const onEnterGoToClick = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter' || !state.inputPaginationValue.length) return;
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
    onSubmit: (values) =>
      isEdit ? onEditUserHandler(values) : onInviteUserToCompanyHandler(values),
    validationSchema: myAccountValidationScheme,
    validateOnBlur: true,
  });

  const onDeleteIconClickHandler = async (itemId: string) => {
    try {
      setState((prevState) => ({
        ...prevState,
        selectedItemId: itemId,
        selectedUserName: selectedUser?.name || '',
      }));
      const selectedUser = getSelectedUser(members, itemId);
      onDeleteModalWindowToggle();
    } catch (error) {
      console.log(error);
    }
  };

  const onEditIconClickHandler = (itemId: string) => {
    const selectedUser = getSelectedUser(members, itemId);
    formik.setValues({
      email:
        selectedUser?.memberInvite?.email || selectedUser?.user?.email || '',
      fullName: selectedUser?.name || '',
    });

    setIsEdit(true);
    setState((prevState) => ({
      ...prevState,
      role: {
        label: getFirstLetterUppercase(selectedUser?.role || ''),
        value: selectedUser?.role || '',
      },
      prevRole: {
        label: getFirstLetterUppercase(selectedUser?.role || ''),
        value: selectedUser?.role || '',
      },
      prevName: selectedUser?.name || '',
      prevEmail:
        selectedUser?.user?.email || selectedUser?.memberInvite?.email || '',
      selectedItemId: itemId,
      selectedUserName: selectedUser?.name || '',
      isInvitation: selectedUser?.memberInvite ? true : false,
    }));
    onModalWindowToggle();
  };

  const onClickDeleteUserButton = async () => {
    try {
      count === 1 && onChangeStateFieldHandler('isFetchingData', true);
      onChangeStateFieldHandler('isLoading', true);

      await deleteCompanyMember(state.selectedItemId || '');
      const { data } = await getCompanyMembers();
      dispatch(setMembers({ count: data.count, members: data.data }));

      onChangePage({ selected: state.currentPage });
      onChangeStateFieldHandler('isLoading', false);
      onDeleteModalWindowToggle();
    } catch (error) {
      onChangeStateFieldHandler('isLoading', false);
      onDeleteModalWindowToggle();
      console.log(error);
    }
  };

  const onEditUserHandler = async (values: typeof formikInitialValues) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const payload =
        isEdit && !state.isInvitation
          ? {
              role: state.role?.value || '',
            }
          : {
              role: state.role?.value || '',
              name: values.fullName,
              email: values.email,
              isInviteCompanyMember: state.isInvitation,
            };
      await updateCompanyMember(payload, state.selectedItemId);
      const { data } = await getCompanyMembers();
      dispatch(setMembers({ count: data.count, members: data.data }));
      onChangeStateFieldHandler('isLoading', false);
      state.isInvitation && onChangeStateFieldHandler('isInvitation', false);
      setIsEdit(false);
      formik.resetForm();
      onModalWindowToggle();
    } catch (error) {
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('isInvitation', false);
      setIsEdit(false);
      formik.resetForm();
      onModalWindowToggle();
      console.log(error);
    }
  };

  const onInviteUserToCompanyHandler = async (
    values: typeof formikInitialValues
  ) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const payload = {
        email: values.email || '',
        name: values.fullName || '',
        role: state.role?.value || '',
        companiesIds: state.companies?.map((item) => item.value) || [],
      };
      await createCompanyMember(payload);
      onGetAllCompanyMembersHandler();
      onModalWindowToggle();
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('role', { value: '', label: '' });
      onChangeStateFieldHandler('companies', null);
      setIsSentSuccessPopup();
      formik.resetForm();
    } catch (error) {
      onModalWindowToggle();
      formik.resetForm();
      onChangeStateFieldHandler('role', { value: '', label: '' });
      onChangeStateFieldHandler('companies', null);
      onChangeStateFieldHandler('isLoading', false);
      console.log(error);
    }
  };

  const onResendInvitationHandler = async (inviteId: string) => {
    try {
      await resendInvitation(inviteId);
      const { data } = await getCompanyMembers();
      dispatch(setMembers({ count: data.count, members: data.data }));
      setIsResendSuccessPopup();
    } catch (error) {
      console.log(error);
    }
  };

  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);

  const modalFields = getInputFields({
    options: [USER_ROLES, formattedCompanies],
    state: { role: state.role, companies: state.companies },
    funcArray: [onChangeRoleValueHandler, onChangeCompanyValueHandler],
  });

  const isDisableButton =
    isEdit && !state.isInvitation
      ? state.prevRole?.value === state.role?.value
      : isEdit && state.isInvitation
      ? state.prevEmail === formik.values.email &&
        state.prevName === formik.values.fullName &&
        state.prevRole?.value === state.role?.value
      : state.role?.value === 'owner'
      ? !formik.isValid ||
        !formik.values.email ||
        !formik.values.fullName ||
        !formik.dirty ||
        !state.role?.value
      : !formik.isValid ||
        !formik.values.email ||
        !formik.values.fullName ||
        !formik.dirty ||
        !state.role?.value ||
        !state.companies?.length;

  return {
    ...state,
    userRole,
    isEdit,
    count,
    modalFields,
    formik,
    members,
    debouncedValue,
    isModalWindowOpen,
    isDeleteModalWindowOpen,
    isDisableButton,
    onResendInvitationHandler,
    onChangePage,
    onEditUserHandler,
    onChangePagesAmount,
    onModalWindowCancelClickButtonHandler,
    onModalWindowToggleHandler,
    onBlurHandler,
    onFocusSearchHandler,
    onClickDeleteUserButton,
    onInviteUserToCompanyHandler,
    onGetAllCompanyMembersHandler,
    onEditIconClickHandler,
    onDeleteIconClickHandler,
    onModalWindowToggle,
    onDeleteModalWindowToggle,
    onChangeSearchValueHandler,
    onEnterInsertUser,
    onChangeInputValue,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onChangeItemsPerPage,
    onGoToClick,
    onGetCompaniesHandler,
    isSentSuccessPopup,
    setIsSentSuccessPopup,
    isResentSuccessPopup,
    setIsResendSuccessPopup,
  };
};
