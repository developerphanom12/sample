import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { FormikHelpers, useFormik } from 'formik';

import { capiumValidationSchema } from 'services/validation';
import { IState } from 'services/redux/reducer';

import { setCapiumAccount } from './reducer/capiumLogin.reducer';
import {
  setCurrencies,
  setSocialAccount,
  setUser,
} from '../SignUp/reducer/signup.reducer';
import { capiumFetchUser, capiumLogin } from './capiumLogin.api';

import { ROUTES } from 'constants/routes';

interface IuseCapiumLoginState {
  isHoverInfo: boolean;
  errorMessage: string;
  isShowPassword: boolean;
  isModalOpen: boolean;
}
export const useCapiumLoginState = () => {
  const initialState = {
    isHoverInfo: false,
    errorMessage: '',
    isShowPassword: false,
    isModalOpen: false,
  };
  const [state, setState] = useState<IuseCapiumLoginState>(initialState);

  const {
    capiumLoginAccount: { capiumAccounts },
  } = useSelector((state: IState) => state);

  useEffect(() => {
    onChangeStateField('isModalOpen', !!capiumAccounts.length);
  }, []);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onTogglePasswordVisibility = () => {
    onChangeStateField('isShowPassword', !state.isShowPassword);
  };

  const onToggleModalWindowHandler = () => {
    onChangeStateField('isModalOpen', !state.isModalOpen);
  };

  const onChangeStateField = (optionName: string, value: any) =>
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));

  const onMouseEnterHandler = () =>
    setState((prevState) => ({
      ...prevState,
      isHoverInfo: true,
    }));

  const onMouseLeaveHandler = () =>
    setState((prevState) => ({
      ...prevState,
      isHoverInfo: false,
    }));

  const onChooseCapiumAccountHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const accountData = capiumAccounts.find(
      (account) => account.id === event.currentTarget.id
    );
    onCapiumLoginHandler({
      email: accountData?.email || '',
      fullName: accountData?.fullName || '',
      type: 'capium',
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, actions) => onSubmitFormHandler(values, actions),
    validationSchema: capiumValidationSchema,
  });

  const onCapiumLoginHandler = async (
    payload: {
      email: string;
      fullName: string;
      type: string;
    },
    isFirstLogin?: boolean
  ) => {
    try {
      const { data } = await capiumLogin(payload);

      dispatch(setUser(data));
      !data.user.isOnboardingDone && dispatch(setCurrencies(data.currencies));
      dispatch(
        setSocialAccount({
          capiumEmail: data.socialAccount.email,
          capiumId: data.socialAccount.capiumId,
          id: data.socialAccount.id,
        })
      );

      isFirstLogin &&
        dispatch(
          setCapiumAccount({
            id: data.socialAccount.id,
            email: data.socialAccount.capiumEmail,
            fullName: data.user.fullName,
          })
        );

      navigate(data.user.isOnboardingDone ? ROUTES.home : ROUTES.preference);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitFormHandler = async (
    values: {
      email: string;
      password: string;
    },
    actions: FormikHelpers<{ email: string; password: string }>
  ) => {
    try {
      const { data } = await capiumFetchUser({
        email: values.email,
        password: values.password,
      });

      if (!data.isSuccess) {
        data.errors.length &&
          actions.setErrors({
            email: ' ',
            password: 'Invalid email or password',
          });
      } else {
        const payload = {
          socialAccountId: data.id,
          email: data.email,
          fullName: data.name,
          type: 'capium',
        };
        onCapiumLoginHandler(payload, true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    ...state,
    formik,
    capiumAccounts,
    onChooseCapiumAccountHandler,
    onTogglePasswordVisibility,
    onToggleModalWindowHandler,
    setState,
    onSubmitFormHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  };
};
