import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { emailValidation, passwordValidation } from 'services/validation';

interface IuseLoginStateState {
  isShowPassword: boolean;
}

export const useLoginState = () => {
  const initialState = {
    isShowPassword: false,
  };
  const [state, setState] = useState<IuseLoginStateState>(initialState);

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
    onTogglePasswordVisibility,
  };
};
