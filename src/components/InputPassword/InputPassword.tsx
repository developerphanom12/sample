import React from 'react';
import { Icon } from 'components/Icons/Icons';
import { Styled } from './InputPassword.style';
import { ErrorText } from '../ErrorText';

interface InputProps {
  text: string;
  showPassword: boolean;
  password: string;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  inputName?: string;
  errorText?: string;
  touched?: boolean;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputPassword: React.FC<InputProps> = (props) => {
  const {
    text,
    showPassword,
    password,
    inputName,
    errorText,
    touched,
    onChangePassword,
    onClick,
    onBlur,
  } = props;

  return (
    <>
      <Styled.Label>{text}</Styled.Label>
      <Styled.WrapperInput>
        <Styled.Input
          isError={!!errorText && touched}
          onBlur={onBlur}
          name={inputName}
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={onChangePassword}
        />
        <Styled.Button onClick={onClick}>
          <Icon type="showPassword" />
        </Styled.Button>
        {touched && !!errorText && <ErrorText errorText={errorText} />}
      </Styled.WrapperInput>
    </>
  );
};
