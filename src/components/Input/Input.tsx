import React from 'react';

import { Styled } from './Input.style';
import { ErrorText } from '../ErrorText';

interface InputProps {
  inputName?: string;
  errorText?: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  touched?: boolean;
  isHiddenLabel?: boolean;
  text?: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    text,
    inputName,
    value,
    errorText,
    touched,
    isHiddenLabel,
    onChangeValue,
    onBlur,
  } = props;

  return (
    <Styled.InputWrapper>
      {isHiddenLabel ? null : <Styled.Label>{text}</Styled.Label>}

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
