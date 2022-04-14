import React from 'react';

import { Styled } from './Input.style';
import { ErrorText } from '../ErrorText';

interface InputProps {
  inputHeight?: string;
  isTextArea?: boolean;
  inputName?: string;
  errorText?: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  touched?: boolean;
  isHiddenLabel?: boolean;
  text?: string;
  onChangeValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    text,
    inputName,
    isTextArea,
    inputHeight,
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
      {isTextArea ? (
        <Styled.TextArea
        
          inputHeight={inputHeight}
          onChange={onChangeValue}
          value={value}
        />
      ) : (
        <Styled.Input
          type="text"
          isError={!!errorText && touched}
          onBlur={onBlur}
          name={inputName}
          value={value}
          onChange={onChangeValue}
        />
      )}
      {touched && !!errorText && <ErrorText errorText={errorText} />}
    </Styled.InputWrapper>
  );
};
