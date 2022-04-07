import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ActionMeta } from 'react-select';
import { currencies } from 'currencies.json';

import { IOption } from 'components/CustomSelect/types';

import { DATE_FORMATS } from 'constants/strings';
import { ROUTES } from 'constants/routes';

interface IusePreferenceState {
  selectedCurrencyValue: IOption | unknown;
  selectedFormatDate: IOption | unknown;
}

export const usePreferenceState = () => {
  const formatedCurrencies = currencies.map((currency) => ({
    label: `${currency.code} (${currency.name})`,
    value: currency.code,
  }));

  const initialState = {
    selectedCurrencyValue: formatedCurrencies[0],
    selectedFormatDate: DATE_FORMATS[0],
  };
  const navigate = useNavigate();
  const [state, setState] = useState<IusePreferenceState>(initialState);

  const onChangeCurrencyHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => {
    setState((prevState) => ({
      ...prevState,
      selectedCurrencyValue: newValue,
    }));
  };
  const onChangeDateFormatHandler = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => {
    setState((prevState) => ({
      ...prevState,
      selectedFormatDate: newValue,
    }));
  };

  const onContinueButtonClickHandler = () => navigate(ROUTES.home);

  return {
    ...state,
    formatedCurrencies,
    onContinueButtonClickHandler,
    onChangeCurrencyHandler,
    onChangeDateFormatHandler,
  };
};
