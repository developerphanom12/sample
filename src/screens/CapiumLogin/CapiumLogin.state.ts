import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';

import { setCapiumAccount } from './reducer/capiumLogin.reducer';
import { storageService } from 'services/storage-service';
import { capiumValidationSchema } from 'services/validation';
import { IState } from 'services/redux/reducer';

import { setSocialAccount, setUser } from '../SignUp/reducer/signup.reducer';
import { capiumFetchUser, capiumLogin } from './capiumLogin.api';

import { ROUTES } from 'constants/routes';

interface IuseCapiumLoginState {
  isHoverInfo: boolean;
  errorMessage: string;
  isSuccess: boolean;
  isShowPassword: boolean;
  isModalOpen: boolean;
}
export const useCapiumLoginState = () => {
  const initialState = {
    isHoverInfo: false,
    errorMessage: '',
    isSuccess: true,
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
    onSubmit: (values) => onSubmitFormHandler(values),
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

      storageService.setToken(data.token);
      storageService.setUser(data.user);

      dispatch(setUser(data));
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

  const onSubmitFormHandler = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      const { data } = await capiumFetchUser({
        email: values.email,
        password: values.password,
      });

      if (!data.isSuccess) {
        setState((prevState) => ({
          ...prevState,
          isSuccess: data.isSuccess,
        }));
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
