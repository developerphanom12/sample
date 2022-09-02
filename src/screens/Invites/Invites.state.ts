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
  getSelectedItems,
  getSelectedUser,
  getUserRole,
} from 'services/utils';

import { USER_ROLES } from 'constants/strings';
import {
  formikInitialValues,
  getInputFields,
  INVITES_INITIAL_STATE,
} from './invites.constants';
import { IInvitesState } from './types/invites.types';
import { getCompanyInvitation } from './invites.api';
import { setInvites } from './reducer/invites.reducer';
import { createCompanyMember } from '../Settings/settings.api';

export const useInvitesState = () => {
  const dispatch = useDispatch();
  const {
    user: {
      user: { active_account, accounts },
    },
    invites: {
      invites: { count, result },
    },
  } = useSelector((state: IState) => state);

  const userRole = getUserRole(accounts || [], active_account || '');

  const initialState = INVITES_INITIAL_STATE;

  const [state, setState] = useState<IInvitesState>(initialState);
  const [isEdit, setIsEdit] = useState(false);
  const [isModalWindowOpen, onModalWindowToggle] = useToggle();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();
  const [isSentSuccessPopup, setIsSentSuccessPopup] = useToggle();
  const [isResentSuccessPopup, setIsResendSuccessPopup] = useToggle();

  const onModalWindowCancelClickButtonHandler = () => {
    onModalWindowToggle();
    setIsEdit(false);
    onChangeStateFieldHandler('role', null);
    formik.resetForm();
  };

  const onModalWindowToggleHandler = () => {
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

  const onGetAllCompanyInvitationsHandler = async (params?: ISearchParams) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const { data } = await getCompanyInvitation(params);
      state.isSearching && state.isFocus
        ? onChangeStateFieldHandler('searchedInvites', data.data)
        : dispatch(setInvites({ count: data.count, invites: data.data }));
      setState((prevState) => ({
        ...prevState,
        isSearching: false,
        isLoading: false,
        isFetchingData: false,
        isContentLoading: false,
        isEmptyData: data.count ? false : true,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isSearching: false,
        isLoading: false,
        isFetchingData: false,
        isEmptyData: false,
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
    onGetAllCompanyInvitationsHandler({ take: Number(newValue?.value) });
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
    onGetAllCompanyInvitationsHandler({
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

  const onEnterCreatetInvite = (event: React.KeyboardEvent) => {
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
      isEdit
        ? onEditInviteHandler(values)
        : onSendInviteToCreateCompanyHandler(values),
    validationSchema: myAccountValidationScheme.fields.email,
    validateOnBlur: true,
  });

  const onDeleteIconClickHandler = (itemId: string) => {
    const selectedInvite = getSelectedItems(result, itemId);
    setState((prevState) => ({
      ...prevState,
      selectedItemId: itemId,
      selectedEmail: selectedInvite?.email || '',
    }));
    onDeleteModalWindowToggle();
  };

  const onEditIconClickHandler = (itemId: string) => {
    const selectedInvite = getSelectedItems(result, itemId);
    formik.setValues({
      email: selectedInvite?.email || '',
    });

    setIsEdit(true);

    onModalWindowToggle();
  };

  const onClickDeleteInviteButton = async () => {
    try {
      count === 1 && onChangeStateFieldHandler('isFetchingData', true);
      onChangeStateFieldHandler('isLoading', true);

      onChangePage({ selected: state.currentPage });
      onChangeStateFieldHandler('isLoading', false);
      onDeleteModalWindowToggle();
    } catch (error) {
      onChangeStateFieldHandler('isLoading', false);
      onDeleteModalWindowToggle();
      console.log(error);
    }
  };

  const onEditInviteHandler = async (values: typeof formikInitialValues) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const payload = {
        role: state.role?.value || '',
        email: values.email,
      };
      onChangeStateFieldHandler('isLoading', false);
      setIsEdit(false);
      formik.resetForm();
      onModalWindowToggle();
    } catch (error) {
      onChangeStateFieldHandler('isLoading', false);
      setIsEdit(false);
      formik.resetForm();
      onModalWindowToggle();
      console.log(error);
    }
  };

  const onSendInviteToCreateCompanyHandler = async (
    values: typeof formikInitialValues
  ) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const payload = {
        email: values.email || '',
        isDifferentsRoles: true,
        role: state.role?.value || '',
      };
      await createCompanyMember(payload);
      onGetAllCompanyInvitationsHandler();
      onModalWindowToggle();
      onChangeStateFieldHandler('isLoading', false);
      setIsSentSuccessPopup();
      formik.resetForm();
    } catch (error) {
      console.log('aaa');

      onModalWindowToggle();
      formik.resetForm();
      onChangeStateFieldHandler('isLoading', false);
      console.log(error);
    }
  };

  const onResendInvitationHandler = async (token: string) => {};

  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);

  const modalFields = getInputFields({
    options: [USER_ROLES.slice(0, 3)],
    state: { role: state.role },
    onChangeSelectHandler: onChangeRoleValueHandler,
  });

  const isDisableButton = false;

  return {
    ...state,
    userRole,
    isEdit,
    count,
    modalFields,
    formik,
    result,
    debouncedValue,
    isModalWindowOpen,
    isDeleteModalWindowOpen,
    isDisableButton,
    onResendInvitationHandler,
    onChangePage,
    onEditInviteHandler,
    onChangePagesAmount,
    onModalWindowCancelClickButtonHandler,
    onModalWindowToggleHandler,
    onBlurHandler,
    onFocusSearchHandler,
    onClickDeleteInviteButton,
    onSendInviteToCreateCompanyHandler,
    onGetAllCompanyInvitationsHandler,
    onEditIconClickHandler,
    onDeleteIconClickHandler,
    onModalWindowToggle,
    onDeleteModalWindowToggle,
    onChangeSearchValueHandler,
    onEnterCreatetInvite,
    onChangeInputValue,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onChangeItemsPerPage,
    onGoToClick,
    isSentSuccessPopup,
    setIsSentSuccessPopup,
    isResentSuccessPopup,
    setIsResendSuccessPopup,
  };
};
