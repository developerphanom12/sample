import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { emailValidation, passwordValidation } from 'services/validation';
import { storageService } from 'services/storage-service';

import { login } from './login.api';
import { ILogin } from './types/login.types';
import { setUser } from '../SignUp/reducer/signup.reducer';

import { ROUTES } from 'constants/routes';

interface IuseLoginStateState {
  isShowPassword: boolean;
}

export const useLoginState = () => {
  const initialState = {
    isShowPassword: false,
  };
  const [state, setState] = useState<IuseLoginStateState>(initialState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSignUpClickHandler = () => {
    navigate(ROUTES.sign_up);
  };

  const onTogglePasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      isShowPassword: !prevState.isShowPassword,
    }));
  };

  const onSignInButtonClickHandler = async (loginValues: ILogin) => {
    try {
      const { data } = await login(loginValues);

      dispatch(setUser(data));
      storageService.setToken(data.token);
      storageService.setUser(data.user);

      navigate(ROUTES.home);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => onSignInButtonClickHandler(values),

    validationSchema: Yup.object().shape({
      email: emailValidation,
      password: passwordValidation,
    }),
  });

  return {
    ...state,
    formik,
    onSignUpClickHandler,
    onTogglePasswordVisibility,
  };
};
