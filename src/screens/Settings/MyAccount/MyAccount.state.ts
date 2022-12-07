import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionMeta, SingleValue } from 'react-select';
import { useFormik } from 'formik';

import { IState } from 'services/redux/reducer';
import { getFormatedCurrencies } from 'services/utils';
import {
  myAccountValidationScheme,
  resetPasswordValidationScheme,
} from 'services/validation';
import { useToggle } from 'hooks/useToggle';

import {
  getInputFields,
  getResetPasswordInputFields,
  resetPasswordFormikInitialValues,
} from './MyAccount.constants';
import { getProfile, resetPassword, updateProfile } from './myAccount.api';

import { updateUserProfile } from '../../SignUp/reducer/signup.reducer';

import { DATE_FORMATS } from 'constants/strings';
import { countries } from 'constants/countries-array';

interface IuseMyAccountState {
  currency: SingleValue<IOption> | any;
  dateFormat: SingleValue<IOption> | any;
  country: SingleValue<IOption> | any;
}

export const useMyAccountState = () => {
  const {
    user: {
      currencies,
      userInfo: {
        company: { currency, date_format },
      },
      user,
    },
  } = useSelector((state: IState) => state);
  const dispatch = useDispatch();

  const formatedCurrencies = getFormatedCurrencies(currencies);
  const currentCurrency = formatedCurrencies?.find(
    (item) => item?.id === currency?.id
  );
  const currentDate = DATE_FORMATS.find((item) => item.value === date_format);
  const currentCountry = countries.find((item) => item.value === user.country);

  const prevValues = {
    currency: currentCurrency,
    dateFormat: currentDate,
    country: currentCountry,
    fullName: user.fullName,
    email: user.email,
  };

  const initialState = {
    currency: currentCurrency,
    dateFormat: currentDate,
    country: currentCountry,
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const formikInitialValues = {
    fullName: user.fullName,
    email: user.email || '',
  };

  const [state, setState] = useState<IuseMyAccountState>(initialState);
  const [isResetPassword, setIsResetPassword] = useToggle();
  const [isShowCurrentPassword, setIsShowCurrentPassword] = useToggle();
  const [isShowNewPassword, setIsShowNewPassword] = useToggle();
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useToggle();
  const [isShowSuccesPopup, setIsShowSuccesPopup] = useToggle();

  const onChangeStateFieldHandler = (
    optionName: keyof typeof initialState,
    value: string | boolean | SingleValue<IOption>
  ) => {
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const onChangeCountryValueHandler = (
    newValue: any,
    actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('country', newValue);

  const onChangeCurrencyValueHandler = (
    newValue: any,
    actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('currency', newValue);

  const onChangeDateFormatValueHandler = (
    newValue: any,
    actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('dateFormat', newValue);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    formik.handleChange(event);

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: (values) => updateUserProfileHandler(values),
    validationSchema: myAccountValidationScheme,
    validateOnBlur: true,
  });

  const resetPasswordFormik = useFormik({
    initialValues: resetPasswordFormikInitialValues,
    onSubmit: (values) => onSaveNewPasswordHandler(values),
    validationSchema: resetPasswordValidationScheme,
    validateOnBlur: true,
  });

  const getProfileHandler = async () => {
    try {
      setIsFetchingData(true);
      const { data } = await getProfile(user.active_account || '');
      dispatch(updateUserProfile(data));
      setIsFetchingData(false);
    } catch (error) {
      setIsFetchingData(false);
      console.log(error);
    }
  };

  const onSaveNewPasswordHandler = async (
    resetPasswordValues: typeof resetPasswordFormikInitialValues
  ) => {
    try {
      setIsLoading(true);
      const payload = {
        old_password: resetPasswordValues.currentPassword
          ? resetPasswordValues.currentPassword
          : undefined,
        new_password: resetPasswordValues.confirmPassword,
      };
      const { data } = await resetPassword(payload);
      if (data.message === 'The password has been updated') {
        setIsShowSuccesPopup();
      }
      resetPasswordFormik.resetForm();
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      const { data } = error.response;
      data.message === 'Password is required' &&
        resetPasswordFormik.setErrors({
          currentPassword: 'Please enter current password',
        });
      data.message === 'Wrong password' &&
        resetPasswordFormik.setErrors({
          currentPassword: 'Please enter correct password',
        });
      setIsLoading(false);
    }
  };
  const isEqualFields =
    resetPasswordFormikInitialValues.confirmPassword ===
      resetPasswordFormik.values.confirmPassword &&
    resetPasswordFormikInitialValues.currentPassword ===
      resetPasswordFormik.values.currentPassword &&
    resetPasswordFormikInitialValues.newPassword ===
      resetPasswordFormik.values.newPassword;
  const onSettingsClickButtonHandler = () => {
    if (!isEqualFields) {
      resetPasswordFormik.setValues(resetPasswordFormikInitialValues);
    }
    setIsResetPassword();
  };

  const onCancelbuttonClickHandler = () => {
    setState((prevState) => ({
      ...prevState,
      currency: currentCurrency,
      dateFormat: currentDate,
      country: currentCountry,
    }));
    formik.setValues({ email: user.email, fullName: user.fullName });
  };

  const updateUserProfileHandler = async (
    formikValues: typeof formikInitialValues
  ) => {
    try {
      setIsLoading(true);

      const payload = !user.active_account
        ? {
            fullName: formikValues.fullName,
            email: formikValues.email,
            country: state.country.value,
          }
        : {
            fullName: formikValues.fullName,
            email: formikValues.email,
            country: state.country.value,
            currency: state.currency.id,
            date_format: state.dateFormat.value,
            active_account: user.active_account,
          };
      const { data } = await updateProfile(payload);
      dispatch(updateUserProfile(data));
      setIsShowSuccesPopup();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const resetPasswordFields = getResetPasswordInputFields({
    isShowPassword: {
      isShowCurrentPassword,
      isShowNewPassword,
      isShowConfirmPassword,
    },
    funcsArray: [
      setIsShowCurrentPassword,
      setIsShowNewPassword,
      setIsShowConfirmPassword,
    ],
  });

  const accountsFields = getInputFields({
    isDisabledSelect: !user.active_account ? true : false,
    countries,
    formatedCurrencies,
    dateFormats: DATE_FORMATS,
    funcArray: [
      onChangeCurrencyValueHandler,
      onChangeDateFormatValueHandler,
      onChangeCountryValueHandler,
      onChangeInput,
    ],
    state,
  });

  const isDisableUpdateUserProfileButton =
    state.country?.value === prevValues?.country?.value &&
    state.currency?.value === prevValues?.currency?.value &&
    state.dateFormat?.value === prevValues?.dateFormat?.value &&
    formik.values.fullName === prevValues.fullName &&
    formik.values.email === prevValues.email;

  const onSubmitHandler = isResetPassword
    ? resetPasswordFormik.handleSubmit
    : formik.handleSubmit;

  const isEmptyResetPasswordFields =
    !resetPasswordFormik.values.confirmPassword &&
    !resetPasswordFormik.values.newPassword;

  const isDisabledButton = isResetPassword
    ? !resetPasswordFormik.isValid || isEmptyResetPasswordFields || isLoading
    : !formik.isValid || isDisableUpdateUserProfileButton || isLoading;

  return {
    ...state,
    isFetchingData,
    isLoading,
    onSubmitHandler,
    setIsResetPassword,
    getProfileHandler,
    onCancelbuttonClickHandler,
    onSettingsClickButtonHandler,
    setIsShowSuccesPopup,
    isShowSuccesPopup,
    isDisabledButton,
    formik,
    resetPasswordFormik,
    isResetPassword,
    accountsFields,
    resetPasswordFields,
    user,
    isDisableUpdateUserProfileButton,
  };
};
