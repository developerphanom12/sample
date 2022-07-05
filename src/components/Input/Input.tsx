import React, { useState } from 'react';

import { Styled } from './Input.style';
import { ErrorText } from '../ErrorText';
import { CustomDatePicker } from '../CustomDatePicker';

interface InputProps {
  inputHeight?: string;
  isTextArea?: boolean;
  isNoMargin?: boolean;
  inputName?: string;
  errorText?: string;
  placeHolder?: string;
  inputTheme?: 'search';
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  touched?: boolean;
  isHiddenLabel?: boolean;
  text?: string;
  onChangeValue?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  value: string;
  isInputDate?: boolean;
  inputType?: string;
  onFocus?: () => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    text,
    inputName,
    inputTheme,
    isTextArea,
    inputHeight,
    value,
    errorText,
    touched,
    isHiddenLabel,
    isNoMargin,
    placeHolder,
    isInputDate,
    inputType,
    onChangeValue,
    onKeyDown,
    onBlur,
    onFocus,
  } = props;

  const [value1, setValue] = useState('');
  const handle = (e: any) => setValue(e.target.value);
  return (
    <Styled.InputWrapper data-testid="input-component" isNoMargin={isNoMargin}>
      {isHiddenLabel ? null : <Styled.Label>{text}</Styled.Label>}
      {isTextArea ? (
        <Styled.TextArea
          inputHeight={inputHeight}
          onChange={onChangeValue}
          value={value}
          name={inputName}
        />
      ) : (
        <>
          {isInputDate ? (
            <CustomDatePicker
              isInputDate={isInputDate}
              selectedDate={new Date()}
              formattedDate=""
            />
          ) : (
            <Styled.Input
              data-testid="input-field"
              inputTheme={inputTheme}
              type={inputType || 'text'}
              isError={!!errorText && touched}
              onBlur={onBlur}
              onFocus={onFocus}
              name={inputName}
              value={value1}
              onChange={handle}
              onKeyDown={onKeyDown}
              placeholder={placeHolder}
            />
          )}
        </>
      )}
      {touched && !!errorText && <ErrorText errorText={errorText} />}
    </Styled.InputWrapper>
  );
};
