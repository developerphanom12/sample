import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { Button } from 'components/Button/Button';
import { DivideLine } from 'components/DivideLine/DivideLine';

import { SignUpFormStyles as Styled } from './SignUpForm.styles';
import { InputItem } from '../InputsBox/InputItem';
import { inputs } from '../SignUp.constants';

import { STRINGS } from 'constants/strings';
import { ROUTES } from 'constants/routes';
import { ActionMeta } from 'react-select';

interface ISignUpFormProps {
  onTogglePasswordVisibility: () => void;
  isShowPassword: boolean;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  onFormHandleSubmit: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  isValid: boolean;
  countryValue: {
    label: string;
    value: string;
  };
  onChangeCountryValueHandler: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void;
}

export const SignUpForm: FC<ISignUpFormProps> = (props) => {
  const {
    isShowPassword,
    isValid,
    countryValue,
    onTogglePasswordVisibility,
    onFormHandleSubmit,
    formikMeta,
    formikProps,
    onChangeCountryValueHandler,
  } = props;

  return (
    <Styled.Form onSubmit={onFormHandleSubmit}>
      {inputs.map((input) => (
        <InputItem
          key={input.inputName}
          inputName={input.inputName}
          inputType={input.inputType}
          labelText={input.labelText}
          formikMeta={formikMeta}
          formikProps={formikProps}
          isShowPassword={isShowPassword}
          onTogglePasswordVisibility={onTogglePasswordVisibility}
          countryValue={countryValue}
          onChangeCountryValueHandler={onChangeCountryValueHandler}
        />
      ))}

      <Styled.ForgotPassword to={ROUTES.forgotPassword}>
        {STRINGS.sign_in_up.forgot_password}
      </Styled.ForgotPassword>
      <Button
        isDisabled={!isValid}
        type='submit'
        themedButton='primary'
        width='auth'
      >
        {STRINGS.sign_in_up.sign_up}
      </Button>

      <DivideLine />

      <Link to={ROUTES.capiumLogin}>
        <Button themedButton='capium' width='auth'>
          {STRINGS.sign_in_up.continue_Capium}
        </Button>
      </Link>
    </Styled.Form>
  );
};
