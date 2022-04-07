import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { Input } from 'components/Input/Input';
import { InputPassword } from 'components/InputPassword/InputPassword';
import { Button } from 'components/Button/Button';
import { DivideLine } from 'components/DivideLine/DivideLine';

import { Styled } from './LoginForm.styles';

import { STRINGS } from 'constants/strings';

interface ILoginFormProps {
  onFormHandleSubmit: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  onTogglePasswordVisibility: () => void;
  isShowPassword: boolean;
  isValid: boolean;
}

export const LoginForm: FC<ILoginFormProps> = (props) => {
  const {
    onFormHandleSubmit,
    formikProps,
    onTogglePasswordVisibility,
    formikMeta,
    isShowPassword,
    isValid,
  } = props;

  const {
    value: emailInputValue,
    onBlur: onBlurEmail,
    onChange: onChangeEmail,
    name: emailName,
  } = formikProps('email');

  const {
    value: passwordInputValue,
    onBlur: onBlurPassword,
    onChange: onChangePassword,
    name: passwordName,
  } = formikProps('password');

  const { touched: emailTouched, error: emailError } = formikMeta('email');
  const { touched: passwordTouched, error: passwordError } =
    formikMeta('password');

  return (
    <Styled.Form onSubmit={onFormHandleSubmit}>
      <Input
        inputName={emailName}
        text={STRINGS.sign_in_up.email_input}
        value={emailInputValue}
        onChangeValue={onChangeEmail}
        errorText={emailError}
        onBlur={onBlurEmail}
        touched={emailTouched}
      />

      <InputPassword
        inputName={passwordName}
        text={STRINGS.sign_in_up.password_input}
        showPassword={isShowPassword}
        password={passwordInputValue}
        onChangePassword={onChangePassword}
        onClick={onTogglePasswordVisibility}
        errorText={passwordError}
        onBlur={onBlurPassword}
        touched={passwordTouched}
      />
      <Styled.ForgotPassword>
        {STRINGS.sign_in_up.forgot_password}
      </Styled.ForgotPassword>
      <Button isDisabled={!isValid} themedButton="primary" width="auth" type='submit'>
        {STRINGS.sign_in_up.sign_in}
      </Button>

      <DivideLine />

      <Button themedButton="capium" width="auth">
        {STRINGS.sign_in_up.continue_Capium}
      </Button>
    </Styled.Form>
  );
};
