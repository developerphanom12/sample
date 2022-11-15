import { IOption } from '../../CustomSelect/types';

export const photoDetailsContentInitialState = {
  statusValue: '',
  dateValue: null,
  supplierValue: '',
  currencyValueId: '',
  taxValue: null,
  totalValue: null,
  descriptionValue: '',
  vatCodeValue: '',
  netValue: null,
  formattedDate: '',
};

interface IData {
  state: IusePhotoDetailsContentState;
  formatedCurrencies: { label: string; value: string; id: string }[];
  categoriesForSelect: any[] | IOption[];
  suppliersForSelect: any[] | IOption[];
  typesForSelect: any[] | IOption[];
  disabledOption: { category: boolean; suppliers: boolean; types: boolean };
  paymentStatus: boolean;
  publishStatus: boolean;
}

export const getInputFields = (funcArray: any[], data: IData) => {
  const {
    state,
    categoriesForSelect,
    disabledOption,
    formatedCurrencies,
    paymentStatus,
    publishStatus,
    suppliersForSelect,
    typesForSelect,
  } = data;
  return [
    {
      type: 'date',
      label: 'Date',
      value: state.dateValue,
      onChangeDate: funcArray[0],
    },
    {
      type: 'input',
      label: 'Supplier',
      value: state.supplierValue,
      options: suppliersForSelect,
      onChange: funcArray[1],
    },
    {
      type: 'select',
      label: 'Supplier Account',
      isDisabled: disabledOption.suppliers,
      value: state.supplierAccountValue,
      options: suppliersForSelect,
      onChangeSelect: funcArray[2],
    },
    {
      type: 'select',
      label: 'Category',
      isDisabled: disabledOption.category,
      value: state.categoryValue,
      options: categoriesForSelect,
      onChangeSelect: funcArray[3],
    },
    {
      type: 'select',
      label: 'Currency',
      value: state.currencyValue,
      options: formatedCurrencies,
      onChangeSelect: funcArray[4],
    },
    {
      type: 'input',
      label: 'VAT code',
      value: state.vatCodeValue,
      onChange: funcArray[5],
    },
    {
      type: 'input',
      inputType: 'number',
      label: 'Net',
      value: state.netValue || '',
      onChange: funcArray[6],
    },
    {
      type: 'input',
      inputType: 'number',
      label: 'Tax',
      value: state.taxValue || '',
      onChange: funcArray[7],
    },
    {
      type: 'input',
      inputType: 'number',
      label: 'Total',
      value: state.totalValue || '',
      onChange: funcArray[8],
    },
    {
      type: 'select',
      label: 'Type',
      isDisabled: disabledOption.types,
      value: state.typeValue,
      options: typesForSelect,
      onChangeSelect: funcArray[9],
    },
    {
      type: 'input',
      label: 'Description',
      value: state.descriptionValue,
      onChange: funcArray[10],
      isTextArea: true,
    },
    {
      type: 'checkbox',
      label: 'Publish status',
      labelText: 'Published',
      value: publishStatus,
      onChangeCheckbox: funcArray[11],
    },
    {
      type: 'checkbox',
      label: 'Payment status',
      labelText: 'Mark as paid',
      value: paymentStatus,
      onChangeCheckbox: funcArray[12],
    },
  ];
};

export type TInputFields = ReturnType<typeof getInputFields>;
