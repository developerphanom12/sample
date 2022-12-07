import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SingleValue } from 'react-select';

import { IState } from 'services/redux/reducer';
import { useToggle } from 'hooks/useToggle';
import { useDebounce } from 'hooks/useDebounce';
import { usePagination } from 'hooks/usePagination';

import {
  createTabItem,
  updateTabItem,
  getAllTabItems,
  getTabItemById,
  deleteTabItem,
} from '../master.api';

import { setSupplierAccounts, setTabItem } from '../reducer/master.reducer';
import { IuseMasterState } from '../types/master.types';
import { TAB_INITIAL_STATE } from '../master.constants';

export const useSuppliersTabState = () => {
  const initialState = TAB_INITIAL_STATE;

  const dispatch = useDispatch();
  const [state, setState] = useState<IuseMasterState>(initialState);

  const {
    master: {
      supplierAccounts: { data: suppliersList, count },
      selectedCategory,
    },
    user: {
      user: { active_account },
      userInfo: {
        company: { date_format },
      },
    },
  } = useSelector((state: IState) => state);

  useEffect(() => {
    !count && onChangeStateFieldHandler('isEmptyData', true);
  }, []);

  const onChangeStateFieldHandler = (
    optionName: keyof typeof TAB_INITIAL_STATE,
    value: boolean | string | number | ITabItem[] | SingleValue<IOption> | any
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const debouncedValue = useDebounce(state.searchValue, 250);

  const onChangeSearchValueHandler = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
      isContentLoading: true,
      isSearching: true,
    }));
  };

  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);

  const onChangeCategoryNameValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('modalInputValue', event.target.value);

  const onGetAllSuppliersHandler = async (
    params?: ISearchParams,
    isSearching?: boolean
  ) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const { data } = await getAllTabItems('supplier', {
        ...params,
        active_account,
      });
      isSearching
        ? onChangeStateFieldHandler('searchedItems', data.data)
        : dispatch(setSupplierAccounts({ data: data.data, count: data.count }));
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isContentLoading: false,
        isFetchingData: false,
        isEmptyData: data.count ? false : true,
        isHeaderPanel: true,
        isSearching: false,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isContentLoading: false,
        isFetchingData: false,
        isHeaderPanel: true,
        isEmptyData: !count ? true : false,
        isLoading: false,
        isSearching: false,
      }));
      console.log(error);
    }
  };

  const onCreateSupplierHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      !count && onChangeStateFieldHandler('isFetchingData', true);
      await createTabItem(
        { name: state.modalInputValue, active_account },
        'supplier'
      );
      onGetAllSuppliersHandler();
      onChangePage({ selected: 0 });

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        searchValue: '',
        modalInputValue: '',
      }));
      onModalWindowToggle();
    } catch (error) {
      console.log(error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        searchValue: '',
        isFetchingData: false,
        modalInputValue: '',
      }));
    }
  };

  const onEnterCreateSupplierClick = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    state.isEdit ? onSaveButtonClickHandler() : onCreateSupplierHandler();
  };

  const [isModalWindowOpen, onModalWindowToggle] = useToggle();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();

  const onDeleteItemClickHandler = async (itemId: string) => {
    try {
      const { data } = await getTabItemById(itemId, 'supplier', active_account);
      dispatch(setTabItem(data));
      onDeleteModalWindowToggle();
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteButtonClickHandler = async () => {
    try {
      const isLastElementOnPage = suppliersList.length === 1;
      onDeleteItem(count, isLastElementOnPage);
      count === 1 && onChangeStateFieldHandler('isFetchingData', true);
      count !== 1 && onChangeStateFieldHandler('isContentLoading', true);
      onChangeStateFieldHandler('isLoading', true);

      const skip =
        currentPage === 0
          ? 0
          : isLastElementOnPage && count !== 1
          ? (currentPage - 1) * +itemsPerPage.value
          : currentPage * +itemsPerPage.value;

      await deleteTabItem(selectedCategory?.id || '', 'supplier');

      const { data } = await getAllTabItems('supplier', {
        take: +itemsPerPage.value,
        skip,
        active_account,
      });
      dispatch(setSupplierAccounts({ count: data.count, data: data.data }));

      onChangeStateFieldHandler('isContentLoading', false);
      onChangeStateFieldHandler('isEmptyData', data.count ? false : true);
      count === 1 && onChangeStateFieldHandler('isFetchingData', false);
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('searchValue', '');
      onDeleteModalWindowToggle();
    } catch (error) {
      onChangeStateFieldHandler('isEmptyData', !count ? true : false);
      onChangeStateFieldHandler('isFetchingData', false);
      onChangeStateFieldHandler('isContentLoading', false);
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('searchValue', '');
      onDeleteModalWindowToggle();
      console.log(error);
    }
  };

  const onEditItemClickHandler = async (itemId: string) => {
    try {
      const { data } = await getTabItemById(itemId, 'supplier', active_account);
      dispatch(setTabItem(data));
      onModalWindowToggle();
      setState((prevState) => ({
        ...prevState,
        modalInputValue: data?.name || '',
        prevInputValue: data?.name,
        isEdit: true,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        modalInputValue: '',
        prevInputValue: '',
        isEdit: false,
      }));
      console.log(error);
    }
  };

  const onSaveButtonClickHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      await updateTabItem(
        {
          id: selectedCategory?.id || '',
          name: state.modalInputValue,
          active_account,
        },
        'supplier'
      );
      const { data } = await getAllTabItems('supplier', { active_account });
      dispatch(setSupplierAccounts({ count: data.count, data: data.data }));
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isEdit: false,
        modalInputValue: '',
      }));
      onModalWindowToggle();
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isEdit: false,
        isLoading: false,
        modalInputValue: '',
      }));
      console.log(error);
      onModalWindowToggle();
    }
  };

  const isDisableButton = state.modalInputValue === state.prevInputValue;

  const onModalWindowCancelClickButtonHandler = () => {
    onModalWindowToggle();
    setState((prevState) => ({
      ...prevState,
      modalInputValue: '',
      isEdit: false,
    }));
  };

  const onChangePage = (data: IPaginationData) => {
    const selected = data.selected;
    onChangePageHandler(selected);
    onChangeStateFieldHandler('isContentLoading', true);

    onGetAllSuppliersHandler({
      take: Number(itemsPerPage.value),
      skip: selected * Number(itemsPerPage.value),
      active_account,
    });
  };

  const {
    onBackwardClick,
    onForwardClick,
    onGoToClick,
    onEnterGoToClick,
    onChangeInputValue,
    onChangePagesAmount,
    onChangePageHandler,
    setItemsPerPage,
    setCurrentPage,
    onDeleteItem,
    itemsPerPage,
    currentPage,
    pages,
    inputPaginationValue,
  } = usePagination({ onChangePage });

  const onChangeItemsPerPage = (newValue: IOption) => {
    setItemsPerPage(newValue);
    onChangeStateFieldHandler('isContentLoading', true);
    onChangeStateFieldHandler('isFocus', true);
    onChangeStateFieldHandler('searchValue', '');

    onGetAllSuppliersHandler({ take: Number(newValue.value) });
    setCurrentPage(0);
    if (!count) return;
    onChangePagesAmount(Number(newValue.value), count);
  };

  return {
    ...state,
    currentPage,
    pages,
    inputPaginationValue,
    itemsPerPage,
    active_account,
    debouncedValue,
    onChangePagesAmount,
    onBlurHandler,
    onFocusSearchHandler,
    selectedCategory,
    onChangeSearchValueHandler,
    onGetAllSuppliersHandler,
    onDeleteModalWindowToggle,
    isModalWindowOpen,
    onModalWindowToggle,
    onChangeCategoryNameValueHandler,
    onCreateSupplierHandler,
    onEnterCreateSupplierClick,
    date_format,
    suppliersList,
    count,
    onDeleteItemClickHandler,
    isDeleteModalWindowOpen,
    onDeleteButtonClickHandler,
    onEditItemClickHandler,
    onSaveButtonClickHandler,
    isDisableButton,
    onModalWindowCancelClickButtonHandler,
    onChangeItemsPerPage,
    onChangeInputValue,
    onChangePage,
    onEnterGoToClick,
    onGoToClick,
    onForwardClick,
    onBackwardClick,
  };
};
