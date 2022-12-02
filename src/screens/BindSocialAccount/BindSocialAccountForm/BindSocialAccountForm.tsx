import { FC } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { ActionMeta } from 'react-select';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { InputPassword } from 'components/InputPassword';
import { CustomSelect } from 'components/CustomSelect';

import { BindSocialAccountFormStyles as Styled } from './BindSocialAccountForm.style';
import { IFormikValues } from '../bindSocialAccount.types';

import { countries } from 'constants/countries-array';

interface IBindSocialAccountFormProps {
  onChangeCountryValueHandler: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void;
  onFormHandleSubmit: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  setIsShowConfirmPassword: () => void;
  setIsShowPassword: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  isShowConfirmPassword: boolean;
  isShowPassword: boolean;
  values: IFormikValues;
  errors: FormikErrors<IFormikValues>;
  touched: FormikTouched<IFormikValues>;
  countryValue: IOption;
}

export const BindSocialAccountForm: FC<IBindSocialAccountFormProps> = (
  props
) => {
  const {
    errors,
    touched,
    isShowConfirmPassword,
    isShowPassword,
    isValid,
    values,
    countryValue,
    onChangeCountryValueHandler,
    onChange,
    onBlur,
    setIsShowConfirmPassword,
    setIsShowPassword,
    onFormHandleSubmit,
  } = props;
  return (
    <Styled.Form onSubmit={onFormHandleSubmit}>
      <Input
        value={values['email']}
        errorText={errors['email']}
        onBlur={onBlur}
        touched={touched['email']}
        onChangeValue={onChange}
        inputName="email"
        text="Email"
        isRemoveBorder
      />
      <>
        <Styled.Label>Country</Styled.Label>
        <CustomSelect
          value={countryValue}
          onChangeValueHandler={onChangeCountryValueHandler}
          options={countries}
          isRemoveBorder
        />
      </>
      <Styled.PasswordWrapper>
        <InputPassword
          showPassword={isShowPassword}
          onClick={setIsShowPassword}
          onBlur={onBlur}
          errorText={errors['newPassword']}
          touched={touched['newPassword']}
          password={values['newPassword']}
          onChangePassword={onChange}
          inputName="newPassword"
          text="Password"
        />
      </Styled.PasswordWrapper>
      <InputPassword
        showPassword={isShowConfirmPassword}
        onClick={setIsShowConfirmPassword}
        onBlur={onBlur}
        password={values['confirmPassword']}
        onChangePassword={onChange}
        touched={touched['confirmPassword']}
        errorText={errors['confirmPassword']}
        inputName="confirmPassword"
        text="Confirm Password"
      />
      <Styled.ButtonsWrapper>
        <Button
          isDisabled={!isValid}
          type="submit"
          themedButton="primary"
          width="auth"
        >
          Create ReceiptHub Account
        </Button>
      </Styled.ButtonsWrapper>
    </Styled.Form>
  );
};
