import { ActionMeta, SingleValue } from 'react-select';

export interface IGetInputFieldsProps {
  funcArray: any[];
  state: {
    currency: SingleValue<IOption> | any;
    dateFormat: SingleValue<IOption> | any;
    country: SingleValue<IOption> | any;
  };
  formatedCurrencies: { label: string; value: string; id: string }[];
  countries: IOption[];
  dateFormats: IOption[];
}

export interface IGetResetPasswordFields {
  isShowPassword: {
    isShowCurrentPassword: boolean;
    isShowNewPassword: boolean;
    isShowConfirmPassword: boolean;
  };
  funcsArray: (() => void)[];
}

export type TInputFields = (
  | {
      type: string;
      label: string;
      name: string;
      value?: string;
      options?: undefined;
      onChangeSelect?: undefined;
    }
  | {
      isMulti?: boolean;
      type: string;
      name: string;
      label: string;
      value: IOption;
      options: IOption[];
      onChangeSelect: (
        newValue: IOption | any,
        actionMeta: ActionMeta<IOption> | unknown
      ) => void;
    }
)[];

export interface IResetPasswordFields {
  onToggleVisibility: () => void;
  isShowPassword: boolean;
  label: string;
  name: string;
  type: string;
}
