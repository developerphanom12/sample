import { styled } from 'app/theme';

export const Styled = {
  Label: styled.p`
    font-family: ${(props) => props.theme.font.openSans};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: ${(props) => props.theme.size.small};
  `,

  Input: styled.input<{ isError?: boolean }>`
    font-family: ${(props) => props.theme.font.openSans};
    background-color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.size.normal};
    padding: 10px 40px 10px 10px;
    height: 45px;
    width: 100%;
    border-radius: 5px;
    border: ${({ isError, theme }) =>
      isError
        ? `1px solid ${theme.colors.red}`
        : `1px solid ${theme.colors.opacityBlack}`};
    box-shadow: ${({ theme }) => `0px 1px 1px ${theme.colors.boxShadowBlack}`};
  `,
  Button: styled.div`
    display: flex;
    background-color: transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 13px;
    cursor: pointer;
  `,
  WrapperInput: styled.div`
    position: relative;
  `,
};
