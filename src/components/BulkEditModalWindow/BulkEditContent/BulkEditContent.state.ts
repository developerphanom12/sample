import { useState } from 'react';
import { ActionMeta } from 'react-select';

interface IuseBulkEditContentState {
  statusValue: string;
  categoryValue: string;
  folderValue: string;
  typeValue: string;
  dateValue: unknown;
  supplierValue: string;
  currencyValue: string;
  taxValue: string;
  totalValue: string;
  descriptionValue: string;
  notesValue: string;
}

export const useBulkEditContentState = () => {
  const initialState = {
    statusValue: '',
    categoryValue: '',
    folderValue: '',
    typeValue: '',
    dateValue: null,
    supplierValue: '',
    currencyValue: '',
    taxValue: '',
    totalValue: '',
    descriptionValue: '',
    notesValue: '',
  };
  const [state, setState] = useState<IuseBulkEditContentState>(initialState);

  const onChangeStateFieldHandler = (optionName: string, value: any) =>
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));

  const onChangeStatusFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('statusValue', newValue);

  const onChangeCategoryFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('categoryValue', newValue);

  const onChangeFolderFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('folderValue', newValue);

  const onChangeSupplierFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('folderValue', newValue);

  const onChangeTypeFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('typeValue', newValue);

  const onChangeCurrencyFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('currencyValue', newValue);

  const onChangeTaxFieldHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => onChangeStateFieldHandler('taxValue', newValue);

  const onChangeTotalFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('totalValue', event.target.value);

  const onChangeDescriptionFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('descriptionValue', event.target.value);

  const onChangeNotesFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('notesValue', event.target.value);

  const inputFields = [
    {
      type: 'select',
      label: 'Status',
      value: state.statusValue,
      onChangeSelect: onChangeStatusFieldHandler,
    },
    {
      type: 'select',
      label: 'Category',
      value: state.categoryValue,
      onChangeSelect: onChangeCategoryFieldHandler,
    },
    {
      type: 'select',
      label: 'Folder',
      value: state.notesValue,
      onChangeSelect: onChangeFolderFieldHandler,
    },
    {
      type: 'select',
      label: 'Type',
      value: state.typeValue,
      onChangeSelect: onChangeTypeFieldHandler,
    },
    {
      type: 'select',
      label: 'Supplier',
      value: state.supplierValue,
      onChangeSelect: onChangeSupplierFieldHandler,
    },
    {
      type: 'select',
      label: 'Currency',
      value: state.currencyValue,
      onChangeSelect: onChangeCurrencyFieldHandler,
    },
    {
      type: 'select',
      label: 'Tax',
      value: state.taxValue,
      onChangeSelect: onChangeTaxFieldHandler,
    },
    {
      type: 'input',
      label: 'Total',
      value: state.totalValue,
      onChange: onChangeTotalFieldHandler,
    },
    {
      type: 'input',
      label: 'Description',
      value: state.descriptionValue,
      onChange: onChangeDescriptionFieldHandler,
    },
    {
      type: 'input',
      label: 'Notes',
      height: '75px',
      value: state.notesValue,
      onChange: onChangeNotesFieldHandler,
      isTextArea: true,
    },
  ];

  return inputFields;
};
