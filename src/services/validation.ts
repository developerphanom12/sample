import * as Yup from 'yup';
import { REGEXPS } from '../constants/validation-regexp';

export const VALIDATION_TYPE = {
  password: 'password',
  email: 'email',
};
export const emailValidation = Yup.string()
  .required('Enter a valid email')
  .matches(REGEXPS.email, 'Email should be like example@email.com');

export const passwordValidation = Yup.string()
  .required('Enter password please')
  .min(8, 'Wrong password. Try again or click Forgot password to reset it.')
  .matches(REGEXPS.password, 'Password should be like "ExamPL123@@"');

export const nameValidation = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .lowercase()
    .matches(
      /^[A-Za-z ]*$/,
      'Name must be at least 3 characters and contains only latin letters'
    )
    .max(40)
    .min(3, 'first name must be at least 3 characters')
    .required('first name is a required field'),
  lastName: Yup.string()
    .trim()
    .lowercase()
    .matches(
      /^[A-Za-z ]*$/,
      'Name must be at least 3 characters and contains only latin letters'
    )
    .max(40)
    .min(3, 'last name must be at least 3 characters')
    .required('last name is a required field'),
});

export const validationHashMapping: Record<string, React.ReactNode> = {
  [VALIDATION_TYPE.email]: emailValidation,
  [VALIDATION_TYPE.password]: passwordValidation,
};
