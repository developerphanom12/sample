import { useState } from 'react';
import { SingleValue } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { useToggle } from 'hooks/useToggle';
import { useDebounce } from 'hooks/useDebounce';
import { IState } from 'services/redux/reducer';
import { getUserRole } from 'services/utils';

import { COMPANY_LIST_INITIAL_STATE } from './companyList.constants';
import {
  ISelectedCompany,
  IuseCompanyListState,
} from './types/companyList.types';
import {
  changeCompanyLogo,
  companyCreate,
  companyDelete,
  getAllCompanies,
  getCompanyLogo,
  getOneCompany,
} from '../settings.api';
import { setCompanies } from '../reducer/settings.reducer';

export const useCompanyListState = () => {
  const initialState = COMPANY_LIST_INITIAL_STATE;

  const dispatch = useDispatch();
  const [state, setState] = useState<IuseCompanyListState>(initialState);
  const [isEdit, setIsEdit] = useState(false);
  const {
    user: {
      token,
      user: { active_account, accounts },
      userInfo: {
        company: { currency, date_format },
      },
    },
    settings: { companies },
  } = useSelector((state: IState) => state);

  const userRole = getUserRole(accounts || [], active_account || '');
  const [isModalWindowOpen, onModalWindowToggle] = useToggle();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();

  const onChangeStateFieldHandler = (
    optionName: keyof typeof initialState,
    value:
      | string
      | boolean
      | number
      | SingleValue<IOption>
      | File
      | ISelectedCompany
      | null
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const count = 0;

  const onGetAllCompaniesHandler = async (
    params?: ISearchParams,
    isSearching?: boolean
  ) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const { data } = await getAllCompanies();
      dispatch(setCompanies(data));

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

  const onChangeCompanyNameHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('companyName', event.target.value);

  const onUploadCompanyLogoHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (
      !event.target.files?.length ||
      !event.target.files[0].type.match('image')
    )
      return;
    onChangeStateFieldHandler(
      'logoSrc',
      URL.createObjectURL(event.target?.files[0])
    );
    onChangeStateFieldHandler('logoName', event.target?.files[0]?.name);
    onChangeStateFieldHandler('companyLogo', event.target?.files[0]);
  };

  const onCreateCompanyHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const formData = new FormData();
      formData.append('currency', currency.id);
      formData.append('name', state.companyName);
      formData.append('date_format', date_format);
      if (state.companyLogo?.name) {
        formData.append('logo', state.companyLogo);
      }
      await companyCreate(formData, token);
      onGetAllCompaniesHandler();
      setState((prevState) => ({
        ...prevState,
        companyName: '',
        companyLogo: null,
        logoName: '',
        logoSrc: '',
        isLoading: false,
      }));
      onModalWindowToggle();
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        companyName: '',
        companyLogo: null,
        logoName: '',
        logoSrc: '',
        isLoading: false,
      }));
      onModalWindowToggle();
      console.log(error);
    }
  };

  const onDeleteLogoHandler = () =>
    setState((prevState) => ({
      ...prevState,
      logoName: '',
      logoSrc: '',
    }));

  const onDeleteIconClickHandler = async (itemId: string) => {
    try {
      onDeleteModalWindowToggle();
      const { data } = await getOneCompany(itemId);
      onChangeStateFieldHandler('selectedCompany', {
        name: data.name,
        logo: data.logo,
        id: data.id,
      });
    } catch (error) {
      onDeleteModalWindowToggle();
      console.log(error);
    }
  };

  const onDeleteCompanyHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      await companyDelete(state.selectedCompany?.id || '');
      const { data } = await getAllCompanies();
      dispatch(setCompanies(data));
      onChangePage({ selected: state.currentPage });

      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('searchValue', '');
      onDeleteModalWindowToggle();
    } catch (error) {
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('searchValue', '');
      onDeleteModalWindowToggle();
      console.log(error);
    }
  };

  const onCloseEditModalWindow = () => {
    setState((prevState) => ({
      ...prevState,
      companyName: '',
      selectedCompany: null,
      logoSrc: '',
    }));
    setIsEdit(false);
    onModalWindowToggle();
  };

  const onGetCompanyLogoHandler = async (companyId: string) => {
    try {
      const { data } = await getCompanyLogo(companyId, token);
      const logo = URL.createObjectURL(data);
      setState((prevState) => ({
        ...prevState,
        logoSrc: logo,
        prevLogoSrc: logo,
      }));
      onChangeStateFieldHandler('isCompanyLogoLoading', false);
    } catch (error) {
      onChangeStateFieldHandler('isCompanyLogoLoading', false);
      console.log(error);
    }
  };

  const onChangeCompanyLogoHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const formData = new FormData();
      formData.append('logo', state?.companyLogo || '');
      await changeCompanyLogo(formData, token);
      const { data } = await getAllCompanies();
      dispatch(setCompanies(data));
      onChangeStateFieldHandler('isLoading', false);
      onCloseEditModalWindow();
    } catch (error) {
      onCloseEditModalWindow();
      onChangeStateFieldHandler('isLoading', false);
      console.log(error);
    }
  };

  const onEditIconClickHandler = async (itemId: string) => {
    try {
      setIsEdit(true);
      const { data } = await getOneCompany(itemId);
      onModalWindowToggle();

      onChangeStateFieldHandler('selectedCompany', {
        name: data.name,
        logo: data.logo,
        id: data.id,
      });
      onChangeStateFieldHandler('companyName', data.name);
      onChangeStateFieldHandler('prevCompanyName', data.name);
      !data.logo && onChangeStateFieldHandler('isCompanyLogoLoading', false);
      data.logo && onGetCompanyLogoHandler(itemId);
    } catch (error) {
      onChangeStateFieldHandler('isCompanyLogoLoading', false);
      onModalWindowToggle();
      setIsEdit(false);
      onChangeStateFieldHandler('isLoading', true);
      console.log(error);
    }
  };

  const onEnterInsertUser = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
  };

  const onChangeSearchValueHandler = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
      isContentLoading: true,
    }));
  };

  const isDisabledButton = isEdit
    ? (state.companyName === state.prevCompanyName &&
        state.prevLogoSrc === state.logoSrc) ||
      state.isCompanyLogoLoading
    : !state.companyName.length;

  return {
    ...state,
    isEdit,
    companies,
    userRole,
    isDisabledButton,
    onCloseEditModalWindow,
    onDeleteCompanyHandler,
    onCreateCompanyHandler,
    onGetAllCompaniesHandler,
    debouncedValue,
    onDeleteIconClickHandler,
    onDeleteLogoHandler,
    onChangeCompanyNameHandler,
    onModalWindowToggle,
    onDeleteModalWindowToggle,
    onUploadCompanyLogoHandler,
    isModalWindowOpen,
    isDeleteModalWindowOpen,
    onChangeSearchValueHandler,
    onEnterInsertUser,
    onEditIconClickHandler,
    onChangeInputValue,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onChangeItemsPerPage,
    onGoToClick,
    onChangeCompanyLogoHandler,
  };
};
