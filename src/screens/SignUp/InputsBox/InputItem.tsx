import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { Input } from 'components/Input/Input';
import { InputPassword } from 'components/InputPassword/InputPassword';

interface IInputItemProps {
  inputName: string;
  inputType: string;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  formikMeta: (name: string) => FieldMetaProps<string>;
  labelText: string;
  onTogglePasswordVisibility: () => void;
  isShowPassword: boolean;
}

export const InputItem: FC<IInputItemProps> = (props) => {
  const {
    formikMeta,
    formikProps,
    onTogglePasswordVisibility,
    isShowPassword,
    inputName,
    inputType,
    labelText,
  } = props;

  const { value, onBlur, onChange, name } = formikProps(inputName);

  const { touched, error } = formikMeta(inputName);

  return (
    <>
      {inputType === 'password' ? (
        <InputPassword
          errorText={error}
          onBlur={onBlur}
          touched={touched}
          inputName={name}
          text={labelText}
          showPassword={isShowPassword}
          password={value}
          onChangePassword={onChange}
          onClick={onTogglePasswordVisibility}
        />
      ) : (
        <Input
          errorText={error}
          onBlur={onBlur}
          touched={touched}
          inputName={name}
          text={labelText}
          onChangeValue={onChange}
          value={value}
        />
      )}
    </>
  );
};
