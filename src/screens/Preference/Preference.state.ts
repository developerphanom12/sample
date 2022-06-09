import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ActionMeta, OnChangeValue, SingleValue } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { companyNameValidationScheme } from 'services/validation';

import { IOption, IsMulti } from 'components/CustomSelect/types';
import { IState } from 'services/redux/reducer';

import { userInfoCreate } from './preference.api';
import { setUserInfo, updateUser } from '../SignUp/reducer/signup.reducer';
import { formikInitialValues } from './constants';

import { ROUTES } from 'constants/routes';
import { DATE_FORMATS } from 'constants/strings';

interface IusePreferenceState {
  selectedCurrencyValue: SingleValue<IOption> | any;
  selectedFormatDate: SingleValue<IOption> | any;
  isLoading: boolean;
}

export const usePreferenceState = () => {
  const {
    user: { currencies },
  } = useSelector((state: IState) => state);

  const formatedCurrencies = currencies?.map((currency) => ({
    label: `${currency.value} (${currency.description})`,
    value: currency.value,
    id: currency.id,
  }));

  const initialState = {
    selectedCurrencyValue: formatedCurrencies[0],
    selectedFormatDate: DATE_FORMATS[0],
    isLoading: false,
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeStateFieldHandler = (
    optionName: keyof typeof initialState,
    value: string | SingleValue<IOption> | any
  ) =>
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));

  const [state, setState] = useState<IusePreferenceState>(initialState);

  const onChangeCurrencyHandler = (
    newValue: OnChangeValue<IOption, IsMulti> | unknown,
    actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('selectedCurrencyValue', newValue);

  const onChangeDateFormatHandler = (
    newValue: OnChangeValue<IOption, IsMulti> | unknown,
    actionMeta: ActionMeta<IOption> | unknown
  ) => onChangeStateFieldHandler('selectedFormatDate', newValue);

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: (values) => onContinueButtonClickHandler(values),
    validationSchema: companyNameValidationScheme,
  });

  const onContinueButtonClickHandler = async (
    values: typeof formikInitialValues
  ) => {
    try {
      onChangeStateFieldHandler('isLoading', true);
      const payload = {
        name: values.companyName || '',
        currency: state.selectedCurrencyValue?.id,
        date_format: state.selectedFormatDate?.value,
      };
      const { data } = await userInfoCreate(payload);

      dispatch(setUserInfo({ account: data.account, company: data.company }));
      dispatch(updateUser(data.user));
      onChangeStateFieldHandler('isLoading', false);
      navigate(ROUTES.home, { replace: true });
    } catch (error) {
      onChangeStateFieldHandler('isLoading', false);
      console.log(error);
    }
  };

  const isDisabledButton =
    !formik.values.companyName ||
    !formik.isValid ||
    !state.selectedCurrencyValue.value ||
    !state.selectedFormatDate.value ||
    state.isLoading;

  return {
    ...state,
    formik,
    formatedCurrencies,
    isDisabledButton,
    onContinueButtonClickHandler,
    onChangeCurrencyHandler,
    onChangeDateFormatHandler,
  };
};
