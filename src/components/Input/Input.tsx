import React from 'react';
import { Styled } from './Input.style';
import { ErrorText } from '../ErrorText';

interface InputProps {
  text: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputName?: string;
  errorText?: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  touched?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    text,
    inputName,
    value,
    errorText,
    touched,
    onChangeValue,
    onBlur,
  } = props;

  return (
    <Styled.InputWrapper>
      <Styled.Label>{text}</Styled.Label>
      <Styled.Input
        isError={!!errorText && touched}
        onBlur={onBlur}
        name={inputName}
        value={value}
        onChange={onChangeValue}
      />
      {touched && !!errorText && <ErrorText errorText={errorText} />}
    </Styled.InputWrapper>
  );
};
