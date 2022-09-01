import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  isChecked: boolean;
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
    isChecked: false,
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const locationState = location?.state as { withAccountant: boolean };

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
    onSubmit: (values) =>
      state.isChecked
        ? navigate(ROUTES.invites, { replace: true })
        : onContinueButtonClickHandler(values),
    validationSchema: state.isChecked ? null : companyNameValidationScheme,
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
        withAccountant: locationState?.withAccountant ? true : false,
      };
      const { data } = await userInfoCreate(payload);
      dispatch(setUserInfo({ company: data.company }));
      dispatch(updateUser(data.user));
      onChangeStateFieldHandler('isLoading', false);
      navigate(ROUTES.home, { replace: true });
    } catch (error) {
      onChangeStateFieldHandler('isLoading', false);
      console.log(error);
    }
  };

  const onChangeIamAccountantHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => onChangeStateFieldHandler('isChecked', event.target.checked);

  const isDisabledButton = state.isChecked
    ? false
    : !formik.values?.companyName ||
      !formik.isValid ||
      !state.selectedCurrencyValue?.value ||
      !state.selectedFormatDate?.value ||
      state.isLoading;

  return {
    ...state,
    formik,
    formatedCurrencies,
    isDisabledButton,
    locationState,
    onChangeIamAccountantHandler,
    onContinueButtonClickHandler,
    onChangeCurrencyHandler,
    onChangeDateFormatHandler,
  };
};
