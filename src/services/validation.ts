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

export const capiumPasswordValidation = Yup.string()
  .required('Enter password please')
  .min(8, 'Passwords must contain at least eight characters.')
  .max(30);

export const countryValidation = Yup.string()
  .required('Enter a country please')
  .matches(
    /^[A-Za-z ]*$/,
    'Country must be at least 2 characters and contains only latin letters'
  )
  .min(2, 'Country must be at least 2 characters');

export const nameValidation = Yup.string()
  .trim()
  .matches(
    /^[A-Za-z ]*$/,
    'Name must be at least 3 characters and contains only latin letters'
  )
  .max(40)
  .min(3, 'full name must be at least 3 characters')
  .required('Full name is a required field');

export const signUpValidationSchema = Yup.object().shape({
  email: emailValidation,
  fullName: nameValidation,
  country: countryValidation,
  password: passwordValidation,
});

export const capiumValidationSchema = Yup.object().shape({
  email: emailValidation,
  password: capiumPasswordValidation,
});

export const validationHashMapping: Record<string, React.ReactNode> = {
  [VALIDATION_TYPE.email]: emailValidation,
  [VALIDATION_TYPE.password]: passwordValidation,
};
