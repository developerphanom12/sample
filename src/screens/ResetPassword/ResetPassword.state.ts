import { useState } from 'react';
import { useFormik } from 'formik';

import { resetPasswordValidationSchema } from 'services/validation';

import { formikResetPasswordInitialValues } from './constants';

export const useResetPasswordState = () => {
  const formik = useFormik({
    initialValues: formikResetPasswordInitialValues,
    onSubmit: (values) => {},
    validationSchema: resetPasswordValidationSchema,
  });

  return formik;
};
