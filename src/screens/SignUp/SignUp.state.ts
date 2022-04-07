import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { signUpValidationSchema } from 'services/validation';
import { storageService } from 'services/storage-service';


import { formikInitialValues } from './SignUp.constants';
import { createUser } from './signup.api';
import { ICreateUser } from './types/signup.types';
import { setUser } from './reducer/signup.reducer';

import { ROUTES } from 'constants/routes';

interface IuseSignUpState {
  isShowPassword: boolean;
}

export const useSignUpState = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    navigate(ROUTES.login);
  };

  const onSignUpHandler = async (signUpValues: ICreateUser) => {
    try {
      const { data } = await createUser(signUpValues);

      dispatch(setUser(data));
      storageService.setToken(data.token);
      storageService.setUser(data.user);

      navigate(ROUTES.preference)
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: formikInitialValues,
    onSubmit: (values) => onSignUpHandler(values),
    validationSchema: signUpValidationSchema,
  });

  return {
    ...state,
    formik,
    onTogglePasswordVisibility,
    onLoginClickHandler,
  };
};
