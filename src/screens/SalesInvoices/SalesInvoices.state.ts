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
import { useSortInvoiceTable } from 'hooks/useSortInvoiceTable';

// import { formikInitialValues, INITIAL_STATE } from './inbox.constants';

import { ROUTES } from 'constants/routes';
import { IuseSalesInvoicesState } from './types/salesInvoices.types';
import { formikInitialValues, INITIAL_STATE } from './salesInvoices.constants';
import { getInvoices } from './sales.api';
import { setInvoicesList, setIsCompanyChanged, setIsFetchingDate, setCheckedAllItems } from './reducer/salesInvoices.reducer';

export const useSalesInvoicesState = () => {
  const {
    invoices: {
      totalCount,
      count,
      invoicesList,
      isCompanyChanged,
      isAllChecked,
    },
    user: { user: {active_account}, userInfo: { company }, token },
  } = useSelector((state: IState) => state);
  console.log('IN-LIST', invoicesList);

  const [state, setState] = useState<IuseSalesInvoicesState>(INITIAL_STATE);

  const invoice_formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: async (values, actions) => values,
    validationSchema: emailSendValidationSchema,
  });

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
    state.invoiceDate && setAndFormatDateToISO(state.invoiceDate.toISOString());
  const dateEnd =
    state.invoiceDate &&
    setAndFormatDateToISO(state?.invoiceDate.toISOString(), true);

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
    active_account: active_account || '',
  };

  const onSelectFiles = useSelectFiles();

  const onSelectSalesFilesHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectFiles({
      files: event.target.files,
      location,
      route: ROUTES.filesUploadPreviewsales,
      upload_action: 'sales-invoices'   // this will help to which api to be called. if you not passed it upload purchase receipts
    });
  };

  const onFetchSalesInvoicesHandler = async (params?: any) => {
    try {
      setState((prevState) => ({
        ...prevState,
        isContentLoading: true,
        checkedIds: [],
      }));
      const { data } = await getInvoices({
        ...params,
        active_account: active_account || '',
      });

      console.warn('%%%%%', data);
      isCompanyChanged && dispatch(setIsCompanyChanged(false));
      dispatch(
        setInvoicesList({
          count: data.count,
          data: data.data,
          totalCount: data.totalCount,
        })
      );
      setState((prevState) => ({
        ...prevState,
        isEmptyData: data.totalCount ? false : true,
        isFetchingReceipts: false,
        isContentLoading: false,
      }));
    } catch (error) {
      dispatch(setIsFetchingDate(false));
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
    const isEqual = state.invoiceDate?.toISOString() === date.toISOString();
    setState((prevState) => ({
      ...prevState,
      dateValue: isEqual ? null : date,
      formattedDate: isEqual ? '' : format(date, company.date_format),
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

  const onChangeDateFilterValueHandler = async (
    newValue: any,
    actionMeta: ActionMeta<unknown>
  ) => {
    setState((prevState) => ({
      ...prevState,
      dateFilterValue: {
        value: newValue.value,
        label: `Date - ${newValue.label}`,
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
    [active_account, fetchParams, invoicesList]
  );
  const onCheckedApproveHandler = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        if (!event.target.id) return;
        onChangeStateFieldHandler('isContentLoading', true);
      } catch (error) {
        onChangeStateFieldHandler('isContentLoading', false);
        console.log(error);
      }
    },
    [active_account, fetchParams, invoicesList]
  );

  const onCheckedPublishMockFuncHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.target.id) return;
    },
    []
  );

  const onCheckedAllItemsHandler = useCallback(() => {
    dispatch(setCheckedAllItems(!isAllChecked));
    setState((prevState) => ({
      ...prevState,
      checkedInvoiceIds: !isAllChecked ? invoicesList?.map((invoice) => invoice.id) : [],
    }));
  }, [dispatch, isAllChecked, invoicesList]);

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

      setTimeout(() => excelRef.current && excelRef.current.click(), 100);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickDownloadCSVButtonHandler = async () => {
    try {
      onChangeStateFieldHandler('csvData', '');
      setTimeout(() => csvLink.current && csvLink.current.link.click(), 100);
    } catch (error) {
      console.log(error);
    }
  };

  const isDownloadButtonDisabled = !state.checkedIds.length;

  const onDeleteInvoiceHandler = async () => {
    try {
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
  const onMarkAsHandler = async () => {
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
    items: sortedInvoices,
    requestSort,
    sortField,
    sortOrder,
  } = useSortInvoiceTable({
    items: invoicesList,
  });

  return {
    ...state,
    invoice_formik,
    isCompanyChanged,
    setCurrentPage,
    totalCount,
    fetchParams,
    sortedInvoices,
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
    onCheckedApproveHandler,
    isEmailModalWindowOpen,
    onEmailModalWindowToggle,
    onEmailClick,
    onPostEmailHandler,
    isSentSuccessPopup,
    setIsSentSuccessPopup,
    onCloseModalWindowHandler,
    onChangeDate,
    onChangeSearchValueHandler,
    onSelectSalesFilesHandler,
    onChangeStatusValueHandler,
    onChangeDateFilterValueHandler,
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
    onClickDownloadCSVButtonHandler,
    onCheckedPublishMockFuncHandler,
    onDeleteInvoiceHandler,
    onMarkAsPaidButtonHandler,
    onMarkAsHandler,
    onClickOutsideDatePickerHandler,
    
    onFetchSalesInvoicesHandler,
    active_account,
    onCheckedAllItemsHandler,
    company
  };
};
