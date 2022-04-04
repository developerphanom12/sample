import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { emailValidation, passwordValidation } from 'services/validation';

import { ROUTES } from '../../constants/routes';

interface IuseLoginStateState {
  isShowPassword: boolean;
}

export const useLoginState = () => {
  const initialState = {
    isShowPassword: false,
  };
  const [state, setState] = useState<IuseLoginStateState>(initialState);

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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {},

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
