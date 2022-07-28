import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

import { styled } from 'app/theme';

const INPUT_THEME: Record<string, FlattenInterpolation<ThemeProps<any>>> = {
  search: css`
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.gray};
    padding-right: 18px;
    height: 45px;
    box-shadow: none;
  `,
};

export const Styled = {
  Label: styled.p`
    font-family: ${(props) => props.theme.font.openSans};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: ${(props) => props.theme.size.small};
  `,
  Input: styled.input<{
    isError?: boolean;
    inputHeight?: string;
    inputTheme?: string;
  }>`
    line-height: 1.3;
    font-size: ${(props) => props.theme.size.default};
    padding: 10px;
    background-color: ${(props) => props.theme.colors.white};
    max-height: ${(props) => props.inputHeight || '45px'};
    min-height: 35px;
    width: 100%;
    border-radius: 5px;
    border: ${({ isError, theme }) =>
      isError
        ? `1px solid ${theme.colors.red}`
        : `1px solid ${theme.colors.opacityBlack}`};
    box-shadow: ${({ theme }) => `0px 1px 1px ${theme.colors.boxShadowBlack}`};
    ${(props) => props.inputTheme && INPUT_THEME[props.inputTheme]}
    &::-webkit-contacts-auto-fill-button,
    ::-webkit-credentials-auto-fill-button {
      visibility: hidden;
      position: absolute;
      right: 0;
    }
    &:focus {
      border: ${({ theme }) => `1px solid ${theme.colors.orange}`};
    }
  `,
  TextArea: styled.textarea<{ inputHeight?: string }>`
    font-family: ${(props) => props.theme.font.openSans};
    font-size: ${(props) => props.theme.size.default};
    padding: 10px;
    background-color: ${(props) => props.theme.colors.white};
    height: ${(props) => props.inputHeight || '45px'};
    width: 100%;
    border-radius: 5px;
    border: ${({ theme }) => `1px solid ${theme.colors.opacityBlack}`};
    box-shadow: ${({ theme }) => `0px 1px 1px ${theme.colors.boxShadowBlack}`};
    resize: none;
    &:focus {
      border: ${({ theme }) => `1px solid ${theme.colors.orange}`};
    }
  `,
  InputWrapper: styled.div<{ isNoMargin?: boolean }>`
    margin-bottom: ${({ isNoMargin }) => (isNoMargin ? '0' : '21px')};
    width: 100%;
    position: relative;
  `,
};
