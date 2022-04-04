import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { signUpValidationSchema } from 'services/validation';

import { formikInitialValues } from './SignUp.constants';

import { ROUTES } from 'constants/routes';

interface IuseSignUpState {
  isShowPassword: boolean;
}

export const useSignUpState = () => {
  const navigate = useNavigate();

  const initialState = {
    isShowPassword: false,
  };
  const [state, setState] = useState<IuseSignUpState>(initialState);

  const onTogglePasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      isShowPassword: !prevState.isShowPassword,
    }));
  };

  const onLoginClickHandler = () => {
    navigate(ROUTES.home);
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: (values) => {},
    validationSchema: signUpValidationSchema,
  });

  return {
    ...state,
    formik,
    onTogglePasswordVisibility,
    onLoginClickHandler,
  };
};
