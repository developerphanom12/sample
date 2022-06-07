import {
  IGetInputFieldsProps,
  IGetResetPasswordFields,
} from './types/MyAccount.types';

export const resetPasswordFormikInitialValues = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

export const getInputFields = (props: IGetInputFieldsProps) => {
  const { countries, dateFormats, formatedCurrencies, funcArray, state } =
    props;
  return [
    {
      type: 'input',
      label: 'Full Name',
      name: 'fullName',
    },
    {
      type: 'select',
      name: 'select',
      label: 'Currency',
      value: state.currency,
      options: formatedCurrencies,
      onChangeSelect: funcArray[0],
    },
    {
      type: 'input',
      label: 'Email',
      name: 'email',
    },
    {
      type: 'select',
      name: 'dateFormat',
      label: 'Date Format',
      value: state.dateFormat,
      options: dateFormats,
      onChangeSelect: funcArray[1],
    },
    {
      type: 'select',
      name: 'country',
      label: 'Country',
      value: state.country,
      options: countries,
      onChangeSelect: funcArray[2],
    },
  ];
};

export const getResetPasswordInputFields = (props: IGetResetPasswordFields) => {
  const {
    isShowPassword: {
      isShowConfirmPassword,
      isShowCurrentPassword,
      isShowNewPassword,
    },
    funcsArray,
  } = props;
  return [
    {
      onToggleVisibility: funcsArray[0],
      isShowPassword: isShowCurrentPassword,
      label: 'Current Password',
      name: 'currentPassword',
      type: 'password',
    },
    {
      onToggleVisibility: funcsArray[1],
      isShowPassword: isShowNewPassword,
      label: 'New Password',
      name: 'newPassword',
      type: 'password',
    },
    {
      onToggleVisibility: funcsArray[2],
      isShowPassword: isShowConfirmPassword,
      label: 'Confirm Password',
      name: 'confirmPassword',
      type: 'password',
    },
  ];
};
