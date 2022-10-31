import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SingleValue } from 'react-select';

import { IState } from 'services/redux/reducer';
import { useToggle } from 'hooks/useToggle';
import { useDebounce } from 'hooks/useDebounce';

import {
  createTabItem,
  deleteTabItem,
  getAllTabItems,
  getTabItemById,
  updateTabItem,
} from '../master.api';

import { setTabItem, setTypes } from '../reducer/master.reducer';
import { IuseMasterState } from '../types/master.types';
import { TAB_INITIAL_STATE } from '../master.constants';
import { usePagination } from '../../../hooks/usePagination';
import { PAGINATION_ARRAY } from '../../../constants/pagination-array';

export const useTypesTabState = () => {
  const initialState = TAB_INITIAL_STATE;

  const dispatch = useDispatch();
  const [state, setState] = useState<IuseMasterState>(initialState);

  const {
    master: {
      types: { data: typesList, count },
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

  const onChangeSearchValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
      isSearching: true,
      isContentLoading: true,
    }));

  const onChangeCategoryNameValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('modalInputValue', event.target.value);

  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);

  const onGetAllTypesHandler = async (
    params?: ISearchParams,
    isSearching?: boolean
  ) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const { data } = await getAllTabItems('payment-type', params);
      isSearching
        ? onChangeStateFieldHandler('searchedItems', data.data)
        : dispatch(setTypes({ data: data.data, count: data.count }));
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isContentLoading: false,
        isSearching: false,
        isFetchingData: false,
        isEmptyData: data.count ? false : true,
        isHeaderPanel: true,
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

  const onCreateTypeHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      !count && onChangeStateFieldHandler('isFetchingData', true);
      await createTabItem({ name: state.modalInputValue }, 'payment-type');
      onGetAllTypesHandler();
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

  const onEnterCreateTypeClick = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    onCreateTypeHandler();
  };

  const [isModalWindowOpen, onModalWindowToggle] = useToggle();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();

  const onDeleteItemClickHandler = async (itemId: string) => {
    try {
      const { data } = await getTabItemById(itemId, 'payment-type');
      dispatch(setTabItem(data));
      onDeleteModalWindowToggle();
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteButtonClickHandler = async () => {
    try {
      if (count === 1) {
        setItemsPerPage(PAGINATION_ARRAY[1]);
        onChangeStateFieldHandler('isFetchingData', true);
      }
      onChangeStateFieldHandler('isLoading', true);

      await deleteTabItem(selectedCategory?.id || '', 'payment-type');
      const { data } = await getAllTabItems('payment-type');
      dispatch(setTypes({ count: data.count, data: data.data }));
      onChangePage({ selected: currentPage });

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

  const onEditItemClickHandler = async (itemId: string) => {
    try {
      const { data } = await getTabItemById(itemId, 'payment-type');
      dispatch(setTabItem(data));
      onModalWindowToggle();
      setState((prevState) => ({
        ...prevState,
        modalInputValue: data?.name || '',
        prevInputValue: data?.name,
        isEdit: true,
      }));
    } catch (error) {
      console.log(error);
      setState((prevState) => ({
        ...prevState,
        modalInputValue: '',
        prevInputValue: '',
        isEdit: false,
      }));
    }
  };

  const onSaveButtonClickHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      await updateTabItem(
        {
          id: selectedCategory?.id || '',
          name: state.modalInputValue,
        },
        'payment-type'
      );
      const { data } = await getAllTabItems('payment-type');
      dispatch(setTypes({ count: data.count, data: data.data }));
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

    onGetAllTypesHandler({
      take: Number(itemsPerPage.value),
      skip: selected * Number(itemsPerPage.value),
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
    onGetAllTypesHandler({ take: Number(newValue.value) });
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
    selectedCategory,
    onChangeSearchValueHandler,
    onGetAllTypesHandler,
    onDeleteModalWindowToggle,
    isModalWindowOpen,
    onModalWindowToggle,
    onChangeCategoryNameValueHandler,
    onCreateTypeHandler,
    onEnterCreateTypeClick,
    date_format,
    typesList,
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
    debouncedValue,
    onChangePagesAmount,
    onBlurHandler,
    onFocusSearchHandler,
  };
};
