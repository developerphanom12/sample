import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ActionMeta, SingleValue } from 'react-select';
import { FormikHelpers, useFormik } from 'formik';
import { format } from 'date-fns';
import { CSVLink } from 'react-csv';

import { setAndFormatDateToISO } from 'services/utils';
import { emailSendValidationSchema } from 'services/validation';
import { IState } from 'services/redux/reducer';
import { useToggle } from 'hooks/useToggle';
import { useDebounce } from 'hooks/useDebounce';
import { useSelectFiles } from 'hooks/useSelectFiles';
import { usePagination } from 'hooks/usePagination';
import { useSortableData } from 'hooks/useSortTableData';

// import { formikInitialValues, INITIAL_STATE } from './inbox.constants';

import { updateReceiptItem } from '../ReceiptDetails/receiptDetails.api';

import { ROUTES } from 'constants/routes';
import { IuseSalesInvoicesState } from './types/salesInvoices.types';
import { INITIAL_STATE } from './salesInvoices.constants';

export const useSalesInvoicesState = () => {
  const {
    salesInvoices: {
      totalCount,
      count,
      salesInvoices,
      isCompanyChanged,
      isAllChecked,
    },
    user: { user, userInfo, token },
  } = useSelector((state: IState) => state);

  // const initialState = INITIAL_STATE;
  const [state, setState] = useState<IuseSalesInvoicesState>(INITIAL_STATE);

  const onChangeStateFieldHandler = (
    optionName: keyof typeof INITIAL_STATE,
    value: string | number | boolean | SingleValue<IOption>
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const location = useLocation();
  const dispatch = useDispatch();
  const [isSentSuccessPopup, setIsSentSuccessPopup] = useToggle();
  const debouncedValue = useDebounce(state.searchValue, 250);

  const dateStart =
    state.dateValue && setAndFormatDateToISO(state.dateValue.toISOString());
  const dateEnd =
    state.dateValue &&
    setAndFormatDateToISO(state?.dateValue.toISOString(), true);

  const onChangePage = async ({ selected }: IPaginationData) => {
    onChangePageHandler(selected);
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
    itemsPerPage: receiptsPerPage,
    currentPage,
    pages,
    inputPaginationValue,
  } = usePagination({
    onChangePage,
  });

  const fetchParams = {
    search: debouncedValue,
    status: state.statusValue.value === 'all' ? '' : state.statusValue.value,
    take: +receiptsPerPage.value,
    skip: currentPage * +receiptsPerPage.value,
    date_start: dateStart || '',
    date_end: dateEnd || '',
    active_account: user.active_account || '',
  };

  const onSelectFiles = useSelectFiles();

  const onSelectFilesHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectFiles({
      files: event.target.files,
      location,
      route: ROUTES.filesUploadPreview,
    });
  };

  const onFetchSalesInvoicesHandler = async (params?: any) => {
    try {
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isFetchingReceipts: false,
        isEmptyData: false,
        isContentLoading: false,
        checkedIds: [],
      }));
      console.log(error);
    }
  };

  const onChangeSearchValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
    }));
  };

  const onChangeDate = async (date: Date) => {
    const isEqual = state.dateValue?.toISOString() === date.toISOString();
    setState((prevState) => ({
      ...prevState,
      dateValue: isEqual ? null : date,
      formattedDate: isEqual ? '' : format(date, userInfo.company.date_format),
    }));
    setIsDatePickerOpen();
    const dateStart = setAndFormatDateToISO(date.toISOString());
    const dateEnd = setAndFormatDateToISO(date.toISOString(), true);
  };

  const onChangeStatusValueHandler = async (
    newValue: any,
    actionMeta: ActionMeta<unknown>
  ) => {
    setState((prevState) => ({
      ...prevState,
      statusValue: {
        value: newValue.value,
        label: `Status - ${newValue.label}`,
      },
    }));

    setCurrentPage(0);
  };

  const [isDatePickerOpen, setIsDatePickerOpen] = useToggle();
  const [isEmailModalWindowOpen, onEmailModalWindowToggle] = useToggle();

  const onCloseModalWindowHandler = () => {
    onEmailModalWindowToggle();
  };

  const onEmailClick = () => {
    onEmailModalWindowToggle();
    onActionsClose();
  };

  const onPostEmailHandler = async () => {
    try {
      onChangeStateFieldHandler('isLoading', true);

      onChangeStateFieldHandler('isLoading', false);
      setIsSentSuccessPopup();
      onEmailModalWindowToggle();
    } catch (error: any) {
      console.log(error);
      onChangeStateFieldHandler('isLoading', false);
    }
  };

  const onActionsClick = () =>
    onChangeStateFieldHandler('showActions', !state.showActions);
  const onActionsClose = () => onChangeStateFieldHandler('showActions', false);

  const onChangeReceiptsPerPage = async (newValue: IOption) => {
    setItemsPerPage(newValue);
    if (!totalCount) return;
    setCurrentPage(0);
  };

  const onCheckedItemHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setState((prevState) => ({
        ...prevState,
        checkedIds: prevState.checkedIds.includes(event.target.id)
          ? prevState.checkedIds.filter(
              (item: string) => item !== event.target.id
            )
          : [...prevState.checkedIds, event.target.id],
      }));
    },
    []
  );

  const onCheckedPaidHandler = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        if (!event.target.id) return;
        onChangeStateFieldHandler('isContentLoading', true);
      } catch (error) {
        onChangeStateFieldHandler('isContentLoading', false);
        console.log(error);
      }
    },
    [user.active_account, fetchParams, salesInvoices]
  );

  const onCheckedPublishMockFuncHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.target.id) return;
    },
    []
  );

  const onCheckedAllItemsHandler = useCallback(() => {}, [
    dispatch,
    isAllChecked,
    salesInvoices,
  ]);

  const csvLink = useRef<
    CSVLink & HTMLAnchorElement & { link: HTMLAnchorElement }
  >(null);

  const excelRef = useRef<HTMLAnchorElement>(null);

  const onDownloadExcelFileHandler = async () => {
    try {
      if (!state.checkedIds.length) return;

      const url = URL.createObjectURL(new Blob([]));
      onChangeStateFieldHandler('excelUrl', url);
      excelRef.current &&
        excelRef.current.setAttribute('download', 'receipt.xlsx');
      excelRef.current && excelRef.current.click();
    } catch (error) {
      console.log(error);
    }
  };

  const onClickDownloadCSVButtonHandler = async () => {
    try {
      onChangeStateFieldHandler('csvData', '');
      csvLink.current && csvLink.current.link.click();
    } catch (error) {
      console.log(error);
    }
  };

  const isDownloadButtonDisabled = !state.checkedIds.length;

  const onDeleteReceiptHandler = async () => {
    try {
      // const isLastReceiptOnPage = totalCount === state.checkedIds.length;
      // const isEqualAmount = receipts.length === state.checkedIds.length;
      // let skipReceipts = 0;

      // await receiptDelete(
      //   { receipts: state.checkedIds, active_account: active_account || '' },
      //   token
      // );

      // setState((prevState) => ({
      //   ...prevState,
      //   searchValue:
      //     receipts.length === 1 || state.searchValue
      //       ? ''
      //       : prevState.searchValue,
      //   isContentLoading: receipts.length !== 1 ? true : false,
      //   isFetchingReceipts: isLastReceiptOnPage ? true : false,
      //   statusValue: isLastReceiptOnPage
      //     ? INITIAL_STATE.statusValue
      //     : prevState.statusValue,
      //   dateValue: isLastReceiptOnPage ? null : prevState.dateValue,
      //   formattedDate: isLastReceiptOnPage ? '' : prevState.formattedDate,
      // }));

      // if (currentPage === 0) {
      //   skipReceipts = 0;
      // } else {
      //   skipReceipts = currentPage * +receiptsPerPage.value;
      // }

      // if (isEqualAmount && !!currentPage && count) {
      //   skipReceipts = (currentPage - 1) * +receiptsPerPage.value;
      //   onChangePageHandler(currentPage - 1);
      // }

      // !state.searchValue &&
      //   (await onFetchReceiptsHandler({
      //     ...fetchParams,
      //     skip: skipReceipts,
      //   }));
      onActionsClick();
    } catch (error) {
      onActionsClick();
      console.log(error);
    }
  };

  const onMarkAsPaidButtonHandler = async () => {
    try {
      onChangeStateFieldHandler('isContentLoading', true);
      onActionsClick();
    } catch (error) {
      onActionsClick();
      console.log(error);
    }
  };

  const onClickOutsideDatePickerHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    datePickerRef.current &&
      !datePickerRef?.current.contains(event.target as Node) &&
      setIsDatePickerOpen();
  };

  const datePickerRef = useRef<HTMLButtonElement>(null);

  const {
    items: sortedReceipts,
    requestSort,
    sortField,
    sortOrder,
  } = useSortableData({
    items: [],
  });

  return {
    ...state,
    isCompanyChanged,
    setCurrentPage,
    totalCount,
    fetchParams,
    sortedReceipts,
    requestSort,
    sortField,
    sortOrder,
    receiptsPerPage,
    currentPage,
    pages,
    inputPaginationValue,
    datePickerRef,
    count,
    location,
    isAllChecked,
    dateEnd,
    dateStart,
    debouncedValue,
    onDownloadExcelFileHandler,
    isDownloadButtonDisabled,
    csvLink,
    excelRef,
    isDatePickerOpen,
    setIsDatePickerOpen,
    onCheckedPaidHandler,
    isEmailModalWindowOpen,
    onEmailModalWindowToggle,
    onEmailClick,
    onPostEmailHandler,
    isSentSuccessPopup,
    setIsSentSuccessPopup,
    onCloseModalWindowHandler,
    onChangeDate,
    onChangeSearchValueHandler,
    onSelectFilesHandler,
    onChangeStatusValueHandler,
    onChangeReceiptsPerPage,
    onChangeInputValue,
    onEnterGoToClick,
    onGoToClick,
    onActionsClick,
    onActionsClose,
    onChangePagesAmount,
    onChangePage,
    onForwardClick,
    onBackwardClick,
    onCheckedItemHandler,
    onCheckedAllItemsHandler,
    onClickDownloadCSVButtonHandler,
    onCheckedPublishMockFuncHandler,
    onDeleteReceiptHandler,
    onMarkAsPaidButtonHandler,
    onClickOutsideDatePickerHandler,
  };
};
