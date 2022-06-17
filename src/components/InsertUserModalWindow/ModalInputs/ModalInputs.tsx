import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { CustomSelect } from '../../CustomSelect';
import { Input } from '../../Input';
import { ModalFormStyles as Styled } from './ModalInputs.styles';

interface IModalFormProps {
  inputType: string;
  isMulti?: boolean;
  label: string;
  inputName: string;
  formikMeta: (name: string) => FieldMetaProps<string>;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  onEnterCreateItemClick: (event: React.KeyboardEvent<Element>) => void;
}
export const ModalInputs: FC<IModalFormProps> = (props) => {
  const {
    inputType,
    isMulti,
    label,
    inputName,
    formikMeta,
    formikProps,
    onEnterCreateItemClick,
  } = props;

  const { touched, error } = formikMeta(inputName);
  const { value, onBlur, onChange, name } = formikProps(inputName);
  return (
    <>
      {inputType === 'input' ? (
        <Styled.InputWrapper>
          <Input
            text={label}
            value={value}
            errorText={error}
            inputName={name}
            onBlur={onBlur}
            onChangeValue={onChange}
            touched={touched}
            isNoMargin
            onKeyDown={onEnterCreateItemClick}
          />
        </Styled.InputWrapper>
      ) : (
        <>
          <Styled.Label>{label}</Styled.Label>
          <CustomSelect isFullWidth isMulti={isMulti} />
        </>
      )}
    </>
  );
};
