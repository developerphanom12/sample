import { ActionMeta, SingleValue } from 'react-select';

export interface IGetInputFieldsProps {
  isDisabledSelect?: boolean;
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
      value?: undefined;
      options?: undefined;
      onChangeSelect?: undefined;
      isDisabled?: undefined;
    }
  | {
      isMulti?: boolean;
      isDisabled?: boolean;
      type: string;
      name: string;
      label: string;
      value: IOption[] | IOption | null;
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
