import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';

import { storageService } from 'services/storage-service';
import { capiumValidationSchema } from 'services/validation';

import { setSocialAccount, setUser } from '../SignUp/reducer/signup.reducer';
import { capiumFetchUser, capiumLogin } from './capiumLogin.api';

import { ROUTES } from 'constants/routes';

interface IuseCapiumLoginState {
  emailValue: string;
  passwordValue: string;
  isHoverInfo: boolean;
  errorMessage: string;
  isSuccess: boolean;
  isShowPassword: boolean;
}
export const useCapiumLoginState = () => {
  const initialState = {
    emailValue: '',
    passwordValue: '',
    isHoverInfo: false,
    errorMessage: '',
    isSuccess: true,
    isShowPassword: false,
  };
  const [state, setState] = useState<IuseCapiumLoginState>(initialState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onTogglePasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      isShowPassword: !prevState.isShowPassword,
    }));
  };

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

  const onChangeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      emailValue: event.target.value,
    }));
  };
  const onChangePasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      passwordValue: event.target.value,
    }));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => onSubmitFormHandler(values),
    validationSchema: capiumValidationSchema,
  });

  const onCapiumLoginHandler = async (payload: {
    socialAccountId: string;
    email: string;
    fullName: string;
    type: string;
  }) => {
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
      navigate(data.user.isOnboardingDone ? ROUTES.home : ROUTES.preference);
    } catch (error) {
      console.log(error);
    }
  };

  const isDisabledButton =
    !state.emailValue.length || !state.passwordValue.length;

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
        onCapiumLoginHandler(payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    ...state,
    isDisabledButton,
    formik,
    onTogglePasswordVisibility,
    setState,
    onChangeEmailHandler,
    onChangePasswordHandler,
    onSubmitFormHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  };
};
