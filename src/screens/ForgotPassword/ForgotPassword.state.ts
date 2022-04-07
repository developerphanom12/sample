import { useFormik } from 'formik';
import * as Yup from 'yup';

import { emailValidation } from 'services/validation';

export const useForgotPasswordState = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {},

    validationSchema: Yup.object().shape({
      email: emailValidation,
    }),
  });

  return formik;
};
