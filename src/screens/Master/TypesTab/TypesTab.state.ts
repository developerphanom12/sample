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
import { IMasterParams, IuseMasterState } from '../types/master.types';
import { TAB_INITIAL_STATE } from '../master.constants';

export const useTypesTabState = () => {
  const initialState = {
    ...TAB_INITIAL_STATE,
    isFocus: false,
    isHeaderPanel: false,
  };

  const dispatch = useDispatch();
  const [state, setState] = useState<IuseMasterState>(initialState);

  const {
    master: {
      types: { data: typesList, count },
      selectedCategory,
    },
    user: {
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
    params?: IMasterParams,
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
        isEmptyData: false,
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
      count === 1 && onChangeStateFieldHandler('isFetchingData', true);
      onChangeStateFieldHandler('isLoading', true);

      await deleteTabItem(selectedCategory?.id || '', 'payment-type');
      const { data } = await getAllTabItems('payment-type');
      dispatch(setTypes({ count: data.count, data: data.data }));
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

  const onChangeItemsPerPage = (newValue: any) => {
    onChangeStateFieldHandler('itemsPerPage', newValue);
    onChangeStateFieldHandler('isContentLoading', true);
    onChangeStateFieldHandler('isFocus', true);
    onChangeStateFieldHandler('searchValue', '');
    onGetAllTypesHandler({ take: Number(newValue.value) });
    onChangeStateFieldHandler('currentPage', initialState.currentPage);
    if (!count) return;
    onChangePagesAmount(Number(newValue.value), count);
  };

  const onChangePage = (data: IPaginationData) => {
    const selected = data.selected;
    setState((prevState) => ({
      ...prevState,
      currentPage: selected,
      skipReceipts: selected * Number(state.itemsPerPage.value),
      isContentLoading: true,
    }));
    onGetAllTypesHandler({
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

  return {
    ...state,
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
