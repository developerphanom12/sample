import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { Button } from 'components/Button/Button';
import { DivideLine } from 'components/DivideLine/DivideLine';

import { SignUpFormStyles as Styled } from './SignUpForm.styles';
import { InputItem } from '../InputsBox/InputItem';
import { inputs } from '../SignUp.constants';

import { STRINGS } from 'constants/strings';

interface ISignUpFormProps {
  onTogglePasswordVisibility: () => void;
  isShowPassword: boolean;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  onFormHandleSubmit: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  isValid: boolean;
}

export const SignUpForm: FC<ISignUpFormProps> = (props) => {
  const {
    isShowPassword,
    isValid,
    onTogglePasswordVisibility,
    onFormHandleSubmit,
    formikMeta,
    formikProps,
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
        />
      ))}

      <Styled.ForgotPassword>
        {STRINGS.sign_in_up.forgot_password}
      </Styled.ForgotPassword>
      <Button isDisabled={!isValid} themedButton="primary" width="auth">
        {STRINGS.sign_in_up.sign_in}
      </Button>

      <DivideLine />

      <Button themedButton="capium" width="auth">
        {STRINGS.sign_in_up.continue_Capium}
      </Button>
    </Styled.Form>
  );
};
