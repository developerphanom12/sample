import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SingleValue } from 'react-select';

import { getUserRole } from 'services/utils';
import { IState } from 'services/redux/reducer';
import { useToggle } from 'hooks/useToggle';
import { useDebounce } from 'hooks/useDebounce';
import { usePagination } from 'hooks/usePagination';

import {
  createTabItem,
  deleteTabItem,
  getAllTabItems,
  getTabItemById,
  updateTabItem,
} from '../master.api';
import { setCategories, setTabItem } from '../reducer/master.reducer';
import { IuseMasterState } from '../types/master.types';
import { TAB_INITIAL_STATE } from '../master.constants';

export const useCategoriesTabState = () => {
  const initialState = TAB_INITIAL_STATE;

  const dispatch = useDispatch();
  const [state, setState] = useState<IuseMasterState>(initialState);

  const {
    master: {
      categories: { data: categoriesList, count },
      selectedCategory,
    },
    user: {
      user: { active_account, accounts },
      userInfo: {
        company: { date_format },
      },
    },
  } = useSelector((state: IState) => state);

  const userRole = getUserRole(accounts || [], active_account || '')
    ?.role as TRoles;

  const onChangeStateFieldHandler = (
    optionName: keyof typeof TAB_INITIAL_STATE,
    value: boolean | string | number | ITabItem[] | SingleValue<IOption> | any
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  useEffect(() => {
    !count && onChangeStateFieldHandler('isEmptyData', true);
  }, []);

  const onChangeSearchValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
      isSearching: true,
      isContentLoading: true,
    }));
  };
  const debouncedValue = useDebounce(state.searchValue, 250);

  const onChangeCategoryNameValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('modalInputValue', event.target.value);

  const onGetAllCategoriesHandler = async (
    params?: ISearchParams,
    isSearching?: boolean
  ) => {
    try {
      const { data } = await getAllTabItems('category', {
        ...params,
        active_account,
      });
      isSearching
        ? onChangeStateFieldHandler('searchedItems', data.data)
        : dispatch(setCategories({ data: data.data, count: data.count }));
      setState((prevState) => ({
        ...prevState,
        isContentLoading: false,
        isFetchingData: false,
        isEmptyData: data.count ? false : true,
        isSearching: false,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isFetchingData: false,
        isContentLoading: false,
        isEmptyData: !count ? true : false,
        isSearching: false,
        searchedItems: [],
      }));
      console.log(error);
    }
  };

  const onCreateCategoryHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      !count && onChangeStateFieldHandler('isFetchingData', true);

      await createTabItem(
        { name: state.modalInputValue, active_account },
        'category'
      );
      onChangePageHandler(0);
      await onGetAllCategoriesHandler({
        take: +itemsPerPage.value,
      });

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        searchValue: '',
        modalInputValue: '',
      }));
      onModalWindowToggle();
    } catch (error) {
      console.log(error);
      onModalWindowToggle();
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        searchValue: '',
        isFetchingData: false,
        modalInputValue: '',
      }));
    }
  };

  const onEnterCreateCategoryClick = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    state.isEdit ? onSaveButtonClickHandler() : onCreateCategoryHandler();
  };

  const [isModalWindowOpen, onModalWindowToggle] = useToggle();
  const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();

  const onDeleteItemClickHandler = async (itemId: string) => {
    try {
      const { data } = await getTabItemById(itemId, 'category', active_account);
      dispatch(setTabItem(data));
      onDeleteModalWindowToggle();
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteButtonClickHandler = async () => {
    try {
      const isLastElementOnPage = categoriesList.length === 1;
      count === 1 && onChangeStateFieldHandler('isFetchingData', true);
      onChangeStateFieldHandler('isLoading', true);

      const skip =
        currentPage === 0
          ? 0
          : isLastElementOnPage && count !== 1
          ? (currentPage - 1) * +itemsPerPage.value
          : currentPage * +itemsPerPage.value;

      await deleteTabItem(
        selectedCategory?.id || '',
        'category',
        active_account
      );
      const { data } = await getAllTabItems('category', {
        take: +itemsPerPage.value,
        skip,
        active_account,
      });

      onDeleteItem(count, isLastElementOnPage);
      dispatch(setCategories({ count: data.count, data: data.data }));
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('searchValue', '');
      onChangeStateFieldHandler('isEmptyData', data.count ? false : true);
      count === 1 && onChangeStateFieldHandler('isFetchingData', false);
      onDeleteModalWindowToggle();
    } catch (error) {
      onChangeStateFieldHandler('isEmptyData', !count ? true : false);
      onChangeStateFieldHandler('isFetchingData', false);
      onChangeStateFieldHandler('isLoading', false);
      onChangeStateFieldHandler('searchValue', '');
      onDeleteModalWindowToggle();
      console.log(error);
    }
  };

  const onEditItemClickHandler = async (itemId: string) => {
    try {
      const { data } = await getTabItemById(itemId, 'category', active_account);
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
        'category'
      );

      const { data } = await getAllTabItems('category', {
        active_account,
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });
      dispatch(setCategories({ count: data.count, data: data.data }));
      setState((prevState) => ({
        ...prevState,
        isEdit: false,
        isLoading: false,
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

  const onChangePage = async ({ selected }: IPaginationData) => {
    onChangePageHandler(selected);
    onChangeStateFieldHandler('isContentLoading', true);
    state.searchValue && onChangeStateFieldHandler('searchValue', '');

    await onGetAllCategoriesHandler({
      take: +itemsPerPage.value,
      skip: selected * +itemsPerPage.value,
    });
    onChangeStateFieldHandler('isContentLoading', false);
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

  const onChangeItemsPerPage = async (newValue: IOption) => {
    setItemsPerPage(newValue);
    onChangeStateFieldHandler('isContentLoading', true);
    onChangeStateFieldHandler('searchValue', '');

    await onGetAllCategoriesHandler({
      take: +newValue?.value,
    });

    onChangeStateFieldHandler('isContentLoading', false);
    setCurrentPage(0);
    if (!count) return;
    onChangePagesAmount(+newValue?.value, count);
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

  const onFocusSearchHandler = () => onChangeStateFieldHandler('isFocus', true);
  const onBlurHandler = () => onChangeStateFieldHandler('isFocus', false);

  return {
    ...state,
    userRole,
    currentPage,
    pages,
    inputPaginationValue,
    itemsPerPage,
    selectedCategory,
    debouncedValue,
    active_account,
    onBlurHandler,
    onFocusSearchHandler,
    onChangePagesAmount,
    onModalWindowCancelClickButtonHandler,
    onChangeSearchValueHandler,
    onGetAllCategoriesHandler,
    onDeleteModalWindowToggle,
    isModalWindowOpen,
    onModalWindowToggle,
    onChangeCategoryNameValueHandler,
    onCreateCategoryHandler,
    onEnterCreateCategoryClick,
    date_format,
    categoriesList,
    count,
    onDeleteItemClickHandler,
    isDeleteModalWindowOpen,
    onDeleteButtonClickHandler,
    onEditItemClickHandler,
    onSaveButtonClickHandler,
    isDisableButton,
    onChangeItemsPerPage,
    onChangeInputValue,
    onChangePage,
    onGoToClick,
    onEnterGoToClick,
    onForwardClick,
    onBackwardClick,
  };
};
