import React, { useRef, useState } from 'react';
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

import {
  downloadCSV,
  downloadXLXS,
  getReceipts,
  markAsPaid,
  postEmail,
  receiptDelete,
} from './inbox.api';
import { formikInitialValues, INITIAL_STATE } from './inbox.constants';
import {
  IGetReceiptsParams,
  IPostEmail,
  IuseInboxState,
} from './types/inbox.types';
import {
  setCheckedAllItems,
  setCheckedItem,
  setIsFetchingDate,
  setReceipts,
} from './reducer/inbox.reducer';
import { getReceiptStatistic } from '../Dashboard/dashboard.api';
import { setStatistic } from '../Dashboard/reducer/dashboard.reducer';
import { updateReceiptItem } from '../ReceiptDetails/receiptDetails.api';

import { ROUTES } from 'constants/routes';
import { PAGINATION_ARRAY } from 'constants/pagination-array';

export const useInboxState = () => {
  const {
    inbox: { count, receipts, isFetchingData, isAllChecked },
    dashboard: { metric },
    user: {
      user: { active_account },
      userInfo: { company },
      token,
    },
  } = useSelector((state: IState) => state);

  const initialState = INITIAL_STATE;
  const [state, setState] = useState<IuseInboxState>(initialState);

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

  const totalReceiptCount =
    Number(metric?.accepted) +
    Number(metric?.rejected) +
    Number(metric?.processing) +
    Number(metric?.review);

  const onSelectFiles = useSelectFiles();

  const onSelectFilesHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    onSelectFiles({
      files: event.target.files,
      location,
      route: ROUTES.filesUploadPreview,
    });

  const onFetchReceiptsHandler = async (params?: IGetReceiptsParams) => {
    try {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
        checkedIds: [],
      }));
      const { data } = await getReceipts(params);
      !totalReceiptCount && onGetStatisticHandler();

      dispatch(setReceipts({ count: data.count, data: data.data }));
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isEmptyData: data.count ? false : true,
        isFetchingReceipts: false,
        isContentLoading: false,
        isContentVisible: true,
      }));
      isFetchingData && dispatch(setIsFetchingDate(false));
    } catch (error) {
      dispatch(setIsFetchingDate(false));
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isFetchingReceipts: false,
        isEmptyData: false,
        isContentLoading: false,
        isContentVisible: true,
        checkedIds: [],
      }));
      console.log(error);
    }
  };

  const onGetStatisticHandler = async () => {
    try {
      const { data } = await getReceiptStatistic();
      dispatch(setStatistic(data));
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedValue = useDebounce(state.searchValue, 250);

  const onChangeSearchValueHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      searchValue: event.target.value,
      isContentLoading: true,
    }));
  };

  const onChangeDate = (date: Date) => {
    const isEqual = state.dateValue?.toISOString() === date.toISOString();
    setState((prevState) => ({
      ...prevState,
      isContentLoading: true,
      dateValue: isEqual ? null : date,
      formattedDate: isEqual ? '' : format(date, company.date_format),
    }));
    setIsDatePickerOpen();
    const dateStart = setAndFormatDateToISO(date.toISOString());
    const dateEnd = setAndFormatDateToISO(date.toISOString(), true);

    onFetchReceiptsHandler({
      date_start: isEqual ? '' : dateStart,
      date_end: isEqual ? '' : dateEnd,
      search: debouncedValue,
      status: state.statusValue.value === 'all' ? '' : state.statusValue.value,
    });
  };

  const dateStart =
    state.dateValue && setAndFormatDateToISO(state.dateValue.toISOString());
  const dateEnd =
    state.dateValue &&
    setAndFormatDateToISO(state?.dateValue.toISOString(), true);

  const onChangeStatusValueHandler = (
    newValue: any,
    actionMeta: ActionMeta<unknown>
  ) => {
    setState((prevState) => ({
      ...prevState,
      isContentLoading: true,
      statusValue: {
        value: newValue.value,
        label: `Status - ${newValue.label}`,
      },
    }));
    onFetchReceiptsHandler({
      status: newValue.value === 'all' ? '' : newValue.value,
      date_end: dateEnd || '',
      date_start: dateStart || '',
      search: debouncedValue,
    });
  };

  const [isDatePickerOpen, setIsDatePickerOpen] = useToggle();
  const [isEmailModalWindowOpen, onEmailModalWindowToggle] = useToggle();

  const onCloseModalWindowHandler = () => {
    onEmailModalWindowToggle();
    formik.resetForm();
  };

  const onEmailClick = () => {
    onEmailModalWindowToggle();
    onActionsClose();
  };

  const onPostEmailHandler = async (
    postEmailValues: Omit<IPostEmail, 'receipts'>,
    actions: FormikHelpers<typeof formikInitialValues>
  ) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      await postEmail({
        ...postEmailValues,
        receipts: state.checkedIds,
      });
      formik.resetForm();
      onChangeStateFieldHandler('isLoading', false);
      setIsSentSuccessPopup();
      onEmailModalWindowToggle();
    } catch (error: any) {
      const { data } = error.response;
      data.message &&
        actions.setErrors({
          to: ' ',
          subject: ' ',
          message: `${data.message}`,
        });
      console.log(error);
      onChangeStateFieldHandler('isLoading', false);
    }
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: (values, actions) => onPostEmailHandler(values, actions),
    validationSchema: emailSendValidationSchema,
  });

  const onActionsClick = () =>
    onChangeStateFieldHandler('showActions', !state.showActions);
  const onActionsClose = () => onChangeStateFieldHandler('showActions', false);

  const onChangeReceiptsPerPage = (newValue: IOption) => {
    setItemsPerPage(newValue);
    onChangeStateFieldHandler('isContentLoading', true);
    onFetchReceiptsHandler({
      take: +newValue.value,
      search: debouncedValue,
      date_end: dateEnd || '',
      date_start: dateStart || '',
      status: state.statusValue.value === 'all' ? '' : state.statusValue.value,
    });
    if (!count) return;
    onChangePagesAmount(+newValue.value, count);
    setCurrentPage(0);
  };

  const onChangePage = (data: IPaginationData) => {
    const selected = data.selected;
    onChangePageHandler(selected);
    onChangeStateFieldHandler('isContentLoading', true);

    onFetchReceiptsHandler({
      take: +receiptsPerPage.value,
      skip: selected * +receiptsPerPage.value,
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
    setSkipReceipts,
    itemsPerPage: receiptsPerPage,
    currentPage,
    pages,
    inputPaginationValue,
  } = usePagination({ onChangePage });

  const onCheckedItemHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCheckedItem(event.target.id));
    setState((prevState) => ({
      ...prevState,
      checkedIds: prevState.checkedIds.includes(event.target.id)
        ? prevState.checkedIds.filter(
            (item: string) => item !== event.target.id
          )
        : [...prevState.checkedIds, event.target.id],
    }));
  };

  const onCheckedPaidHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      if (!event.target.id) return;
      onChangeStateFieldHandler('isContentLoading', true);
      const selectedReceipt = receipts?.find(
        (receipt: { id: string }) => receipt.id === event.target.id
      );
      await updateReceiptItem({
        id: event.target.id,
        payment_status: !selectedReceipt?.payment_status,
      });
      onFetchReceiptsHandler();
    } catch (error) {
      console.log(error);
    }
  };

  const onCheckedPublishMockFuncHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.id) return;
  };

  const onCheckedAllItemsHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setCheckedAllItems(!isAllChecked));
    setState((prevState) => ({
      ...prevState,
      checkedIds: !isAllChecked ? receipts?.map((receipt) => receipt.id) : [],
    }));
  };

  const csvLink = useRef<
    CSVLink & HTMLAnchorElement & { link: HTMLAnchorElement }
  >(null);

  const excelRef = useRef<HTMLAnchorElement>(null);

  const onDownloadExcelFileHandler = async () => {
    try {
      if (!state.checkedIds.length) return;
      const { data } = await downloadXLXS(
        { receipts: state.checkedIds },
        token
      );
      const url = URL.createObjectURL(new Blob([data]));
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
      const { data } = await downloadCSV({ receipts: state.checkedIds });
      onChangeStateFieldHandler('csvData', data);
      csvLink.current && csvLink.current.link.click();
    } catch (error) {
      console.log(error);
    }
  };

  const isDownloadButtonDisabled = !state.checkedIds.length;

  const onDeleteReceiptHandler = async () => {
    try {
      await receiptDelete({ receipts: state.checkedIds }, token);
      count === 1 && setItemsPerPage(PAGINATION_ARRAY[1]);

      setState((prevState) => ({
        ...prevState,
        searchValue:
          receipts.length === 1 && prevState.searchValue
            ? ''
            : prevState.searchValue,
        isContentLoading: receipts.length !== 1 ? true : false,
        isContentVisible: receipts.length === 1 ? false : true,
        isFetchingReceipts:
          receipts.length === 1 ||
          receipts.length === prevState.checkedIds.length
            ? true
            : false,
      }));
      state.searchValue && onChangeStateFieldHandler('searchValue', '');
      onFetchReceiptsHandler({
        take: +receiptsPerPage.value,
        skip:
          state.checkedIds.length === count
            ? 0
            : (currentPage - 1) * +receiptsPerPage.value,
      });
      onGetStatisticHandler();
      if (receipts?.length === state.checkedIds.length) {
        if (state.checkedIds.length === count) {
          setCurrentPage(0);
          setSkipReceipts(10);
        } else {
          onChangePageHandler(currentPage - 1);
        }
      }
      onActionsClick();
    } catch (error) {
      onActionsClick();
      console.log(error);
    }
  };

  const onMarkAsPaidButtonHandler = async () => {
    try {
      onChangeStateFieldHandler('isContentLoading', true);
      await markAsPaid({ receipts: state.checkedIds });
      onFetchReceiptsHandler();
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

  return {
    ...state,
    receiptsPerPage,
    currentPage,
    pages,
    inputPaginationValue,
    active_account,
    datePickerRef,
    count,
    location,
    formik,
    isAllChecked,
    dateEnd,
    dateStart,
    debouncedValue,
    onDownloadExcelFileHandler,
    isDownloadButtonDisabled,
    csvLink,
    excelRef,
    totalReceiptCount,
    isDatePickerOpen,
    setIsDatePickerOpen,
    onCheckedPaidHandler,
    isEmailModalWindowOpen,
    onEmailModalWindowToggle,
    onEmailClick,
    onPostEmailHandler,
    receipts,
    isFetchingData,
    company,
    isSentSuccessPopup,
    setIsSentSuccessPopup,
    onCloseModalWindowHandler,
    onChangeDate,
    onChangeSearchValueHandler,
    onSelectFilesHandler,
    onFetchReceiptsHandler,
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
