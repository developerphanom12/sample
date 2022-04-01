import { css } from "styled-components";

import { styled } from "app/theme";

import { NavigationButtonProps } from "./NavigationButton";

const THEME = {
  navigation: css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: ${(props) => props.theme.colors.halfTranparentBlack};
  `,
  pagination: css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.black};
  `,
  current: css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 25px;
    padding: 7px;
    background-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};
    border-radius: 5px;
  `,
};

export const NavigationButtonStyles = {
  Button: styled.button<NavigationButtonProps>`
    max-height: 25px;
    font-size: ${(props) => props.theme.size.default};
    ${(props) => props.themedButton && THEME[props.themedButton]};
  `,
  Content: styled.div`
    &:not(:last-child) {
      margin-right: 14px;
    }
  `,
};
