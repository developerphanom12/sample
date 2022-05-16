import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionMeta } from 'react-select';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { IState } from 'services/redux/reducer';
import {
  getFormatedCurrencies,
  getReceiptDetailsCurrentSelectItem,
} from 'services/utils';

import {
  getAllMasterItems,
  updateReceiptItem,
} from 'screens/ReceiptDetails/receiptDetails.api';
import {
  setIsFetchingDate,
  updateReceipt,
} from 'screens/Inbox/reducer/inbox.reducer';
import { setItemsForSelect } from 'screens/ReceiptDetails/reducer/receiptDetails.reducer';

import {
  getInputFields,
  photoDetailsContentInitialState,
} from './photoDetailsContent.constants';

import { ROUTES } from 'constants/routes';
import { DATE_FORMATS } from 'constants/strings';

export const usePhotoDetailsContentState = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    inbox: { selectedReceipt },
    user: {
      currencies,
      userInfo: { company },
    },
    receiptDetails: { categoriesForSelect, suppliersForSelect, typesForSelect },
  } = useSelector((state: IState) => state);

  const formatedCurrencies = getFormatedCurrencies(currencies);

  const currentCurrency = formatedCurrencies.find(
    (item) => item.id === selectedReceipt?.currency.id
  );

  const currentType = getReceiptDetailsCurrentSelectItem(
    typesForSelect,
    selectedReceipt?.payment_type?.id || ''
  );

  const currentCategory = getReceiptDetailsCurrentSelectItem(
    categoriesForSelect,
    selectedReceipt?.category?.id || ''
  );

  const currentSupplier = getReceiptDetailsCurrentSelectItem(
    suppliersForSelect,
    selectedReceipt?.supplier?.id || ''
  );

  const initialState = {
    ...photoDetailsContentInitialState,
    currencyValue: currentCurrency,
    typeValue: currentType,
    categoryValue: currentCategory,
    supplierValue: currentSupplier,
    publishStatus: selectedReceipt?.publish_status || false,
    paymentStatus: selectedReceipt?.payment_status || false,
    imageSrc: '',
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      statusValue: selectedReceipt?.status || '',
      categoryValue: currentCategory,
      typeValue: currentType,
      dateValue: selectedReceipt?.receipt_date || null,
      supplierValue: currentSupplier,
      supplierAccountValue: selectedReceipt?.supplier_account || '',
      currencyValue: currentCurrency,
      currencyValueId: selectedReceipt?.currency.id || '',
      taxValue: selectedReceipt?.tax || null,
      totalValue: selectedReceipt?.total || null,
      descriptionValue: selectedReceipt?.description || '',
      vatCodeValue: selectedReceipt?.vat_code || '',
      netValue: selectedReceipt?.net || null,
      publishStatus: selectedReceipt?.publish_status || false,
      paymentStatus: selectedReceipt?.payment_status || false,
      formattedDate: selectedReceipt?.receipt_date
        ? format(new Date(selectedReceipt?.receipt_date), company.date_format)
        : '',
    }));
  }, [selectedReceipt]);

  const [state, setState] =
    useState<IusePhotoDetailsContentState>(initialState);

  const onCancelButtonClickHandler = () => navigate(-1);

  const onDatePickerClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    datePickerRef.current &&
      datePickerRef?.current.contains(e.target as Node) &&
      setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));
  };

  const onChangeStateFieldHandler = (optionName: string, value: any) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const onGetAllMasterItemsHandler = async () => {
    try {
      const categoriesData = await getAllMasterItems('category');
      const supplierData = await getAllMasterItems('supplier');
      const typesData = await getAllMasterItems('payment-type');

      dispatch(
        setItemsForSelect({
          fieldName: 'categoriesForSelect',
          items: categoriesData.data,
        })
      );

      dispatch(
        setItemsForSelect({
          fieldName: 'suppliersForSelect',
          items: supplierData.data,
        })
      );

      dispatch(
        setItemsForSelect({
          fieldName: 'typesForSelect',
          items: typesData.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeRadioButtonHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChangeStateFieldHandler('radioButtonValue', event.target.value);
  };

  const onChangeCategoryFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('categoryValue', newValue);

  const onChangeSupplierFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('supplierValue', newValue);

  const onChangeSupplierAccountHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('supplierAccountValue', newValue);

  const onChangeCurrencyFieldHandler = (
    newValue: any,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('currencyValue', newValue.value as string);

  const onChangeTypeFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('typeValue', newValue);

  const onChangeTaxFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('taxValue', event.target.value);

  const onChangeVatCodeFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('vatCodeValue', event.target.value);

  const onChangeNetFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('netValue', event.target.value);

  const onChangeTotalFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('totalValue', event.target.value);

  const onChangeDescriptionFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('descriptionValue', event.target.value);

  const onChangeDate = (date: Date) => {
    setState((prevState) => ({
      ...prevState,
      dateValue: date,
      isOpen: !prevState.isOpen,
      formattedDate: format(date, company.date_format || DATE_FORMATS[0].value),
    }));
  };

  const onClickOutsideDatePickerHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    datePickerRef.current &&
      !datePickerRef?.current.contains(event.target as Node) &&
      setState((prevState) => ({
        ...prevState,
        isOpen: false,
      }));
  };

  const onChangePublishStatus = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChangeStateFieldHandler('publishStatus', event.target.checked);

  const onChangePaymentStatus = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChangeStateFieldHandler('paymentStatus', event.target.checked);

  const onSaveButtonClickHandler = async () => {
    try {
      const payload: IUpdateReceiptItemPayload = {
        id: selectedReceipt?.id || '',
        description: state.descriptionValue || selectedReceipt?.description,
        category: state.categoryValue?.id || selectedReceipt?.category,
        currency: state.currencyValueId || selectedReceipt?.currency.id,
        net: state.netValue || selectedReceipt?.net,
        payment_status: state.paymentStatus,
        publish_status: state.publishStatus,
        receipt_date: state.dateValue || selectedReceipt?.receipt_date,
        status: state.radioButtonValue || selectedReceipt?.status,
        supplier: state.supplierValue?.id || selectedReceipt?.supplier,
        supplier_account:
          state.supplierAccountValue || selectedReceipt?.supplier_account,
        tax: state.taxValue || selectedReceipt?.tax,
        total: state.totalValue || selectedReceipt?.total,
        payment_type: state.typeValue?.id || selectedReceipt?.payment_type,
        vat_code: state.vatCodeValue || selectedReceipt?.vat_code,
      };

      setState((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const { data } = await updateReceiptItem(payload);

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
      dispatch(updateReceipt(data));
      dispatch(setIsFetchingDate(true));

      navigate(ROUTES.inbox);
    } catch (error) {
      console.log(error);
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));

      dispatch(setIsFetchingDate(false));
    }
  };

  const inputFields = getInputFields(
    [
      onChangeDate,
      onChangeSupplierFieldHandler,
      onChangeSupplierAccountHandler,
      onChangeCategoryFieldHandler,
      onChangeCurrencyFieldHandler,
      onChangeVatCodeFieldHandler,
      onChangeNetFieldHandler,
      onChangeTaxFieldHandler,
      onChangeTotalFieldHandler,
      onChangeTypeFieldHandler,
      onChangeDescriptionFieldHandler,
      onChangePublishStatus,
      onChangePaymentStatus,
    ],
    state,
    formatedCurrencies,
    categoriesForSelect,
    suppliersForSelect,
    typesForSelect,
    {
      category: !categoriesForSelect?.length,
      suppliers: !suppliersForSelect?.length,
      types: !typesForSelect?.length,
    }
  );

  const datePickerRef = useRef<HTMLButtonElement>(null);

  return {
    ...state,
    inputFields,
    datePickerRef,
    onClickOutsideDatePickerHandler,
    onDatePickerClickHandler,
    onChangePaymentStatus,
    onChangeRadioButtonHandler,
    onCancelButtonClickHandler,
    onSaveButtonClickHandler,
    onGetAllMasterItemsHandler,
  };
};
