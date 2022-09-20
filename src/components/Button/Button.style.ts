import { css } from 'styled-components';

import { styled } from 'styles/theme';

import { ButtonStyleProps } from './Button';

const THEME = {
  primary: css`
    background-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.lightGray};
  `,
  secondary: css`
    background-color: ${(props) => props.theme.colors.lightGray};
    color: ${(props) => props.theme.colors.black};
  `,
  capium: css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    border: 1px solid rgba(34, 43, 56, 0.2);
  `,
  roundedRed: css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.darkRed};
    color: ${(props) => props.theme.colors.white};
    border-radius: 50px;
  `,
  roundedWhite: css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.darkRed};
    border: ${(props) => `1px solid ${props.theme.colors.darkRed}`};
    border-radius: 50px;
  `,
};

const WIDTH = {
  auth: css`
    width: 100%;
  `,
  primary: css`
    width: 110px;
  `,
  secondary: css`
    width: 100px;
  `,
  actions: css`
    width: 42px;
    height: 45px;
  `,
  rounded: css`
    width: 80px;
    height: 40px;
  `,
};

export const ButtonStyles = {
  Button: styled.button<ButtonStyleProps>`
    font-size: ${(props) => props.theme.size.default};
    max-height: 45px;
    min-height: 42px;
    border-radius: 5px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    background-color: ${(props) => props.theme.colors.lightGray};
    ${(props) => props.themedButton && THEME[props.themedButton]};
    ${(props) => props.width && WIDTH[props.width]};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.8 : 1)};
  `,
  Content: styled.div`
    &:not(:last-child) {
      margin-right: 14px;
    }
  `,
};
