import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ActionMeta, OnChangeValue, SingleValue } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { IOption, IsMulti } from 'components/CustomSelect/types';
import { IState } from 'services/redux/reducer';

import { userInfoCreate } from './preference.api';
import { setUserInfo, updateUser } from '../SignUp/reducer/signup.reducer';

import { ROUTES } from 'constants/routes';
import { DATE_FORMATS } from 'constants/strings';

interface IusePreferenceState {
  selectedCurrencyValue: SingleValue<IOption> | any;
  selectedFormatDate: SingleValue<IOption> | any;
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
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState<IusePreferenceState>(initialState);

  const onChangeCurrencyHandler = (
    newValue: OnChangeValue<IOption, IsMulti> | unknown,
    actionMeta: ActionMeta<IOption> | unknown
  ) => {
    setState((prevState) => ({
      ...prevState,
      selectedCurrencyValue: newValue,
    }));
  };

  const onChangeDateFormatHandler = (
    newValue: OnChangeValue<IOption, IsMulti> | unknown,
    actionMeta: ActionMeta<IOption> | unknown
  ) => {
    setState((prevState) => ({
      ...prevState,
      selectedFormatDate: newValue,
    }));
  };

  const onContinueButtonClickHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      event.preventDefault();
      const payload = {
        currency: state.selectedCurrencyValue?.id,
        date_format: state.selectedFormatDate?.value,
      };

      const { data } = await userInfoCreate(payload);

      dispatch(setUserInfo({ account: data.account, company: data.company }));
      dispatch(updateUser(data.user));
      navigate(ROUTES.home, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    ...state,
    formatedCurrencies,
    onContinueButtonClickHandler,
    onChangeCurrencyHandler,
    onChangeDateFormatHandler,
  };
};
