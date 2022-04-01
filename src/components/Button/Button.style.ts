import { styled } from "app/theme";
import { css } from "styled-components";
import { ButtonProps } from "./Button";

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
};

export const ButtonStyles = {
  Button: styled.button<ButtonProps>`
    font-size: ${(props) => props.theme.size.default};
    height: 45px;
    border-radius: 5px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    ${(props) => props.themedButton && THEME[props.themedButton]};
    ${(props) => props.width && WIDTH[props.width]};
  `,
  Content: styled.div`
    &:not(:last-child) {
      margin-right: 14px;
    }
  `,
};
