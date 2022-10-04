import { css } from 'styled-components';

import { styled } from 'styles/theme';

import { ButtonStyleProps } from './Button';

const THEME = {
  primary: css`
    background-color: ${(props) => props.theme.colors.darkRed};
    color: ${(props) => props.theme.colors.white};
  `,
  secondary: css`
    background-color: ${(props) => props.theme.colors.lightGray};
    color: ${(props) => props.theme.colors.black};
  `,
  threeDots: css`
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.checkboxBorder};
    box-shadow: none;
  `,
  capium: css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.lightBlack};
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
    box-shadow: none;
  `,
};

const WIDTH = {
  auth: css`
    width: 100%;
  `,
  primary: css`
    min-width: 110px;
    max-width: 153px;
    width: auto;
  `,
  secondary: css`
    width: 100px;
  `,
  actions: css`
    width: 40px;
    height: 40px;
  `,
  rounded: css`
    width: 80px;
    height: 40px;
  `,
  roundedBig: css`
    max-width: 160px;
    width: 100%;
    height: 40px;
    box-shadow: none;
  `,
};

export const ButtonStyles = {
  Button: styled.button<ButtonStyleProps>`
    font-size: ${(props) => props.theme.size.default};
    height: 40px;
    border-radius: 6px;
    box-shadow: ${(props) =>
      `0px 0px 5px ${props.theme.colors.boxShadowBlackButton}`};
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
