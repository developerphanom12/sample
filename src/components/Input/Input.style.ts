import { styled } from 'app/theme';

export const Styled = {
  Label: styled.p`
    font-family: ${(props) => props.theme.font.openSans};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: ${(props) => props.theme.size.small};
  `,

  Input: styled.input<{ isError?: boolean; inputHeight?: string }>`
    font-family: ${(props) => props.theme.font.openSans};
    font-size: ${(props) => props.theme.size.normal};
    padding: 10px;
    background-color: ${(props) => props.theme.colors.white};
    height: ${(props) => props.inputHeight || '45px'};
    width: 100%;
    border-radius: 5px;
    border: ${({ isError, theme }) =>
      isError
        ? `1px solid ${theme.colors.red}`
        : `1px solid ${theme.colors.opacityBlack}`};
    box-shadow: ${({ theme }) => `0px 1px 1px ${theme.colors.boxShadowBlack}`};
  `,
  TextArea: styled.textarea<{ inputHeight?: string }>`
    font-family: ${(props) => props.theme.font.openSans};
    font-size: ${(props) => props.theme.size.normal};
    padding: 10px;
    background-color: ${(props) => props.theme.colors.white};
    height: ${(props) => props.inputHeight || '45px'};
    width: 100%;
    border-radius: 5px;
    border: ${({ theme }) => `1px solid ${theme.colors.opacityBlack}`};
    box-shadow: ${({ theme }) => `0px 1px 1px ${theme.colors.boxShadowBlack}`};
    resize: none;
  `,
  InputWrapper: styled.div`
    margin-bottom: 21px;
    position: relative;
  `,
};
