import { styled } from 'styles/theme';

export const DateButtonStyles = {
  Button: styled.button<{ isInputDate: boolean; isOpen?: boolean }>`
    font-size: ${(props) => props.theme.size.default};
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.lightBlack};
    max-height: 40px;
    min-height: 39px;
    width: ${(props) => (props.isInputDate ? '100%' : '140px')};
    border-radius: 5px;
    border: 1px solid
      ${(props) =>
        props.isInputDate
          ? props.theme.colors.boxShadowBlack
          : props.isOpen
          ? props.theme.colors.darkRed
          : props.theme.colors.checkboxBorder};
    box-shadow: ${(props) =>
      props.isInputDate
        ? `0px 1px 1px ${props.theme.colors.boxShadowBlack}`
        : ''};
    cursor: 'pointer';
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${(props) => (props.isInputDate ? '14px 18px' : '11px')};
    position: relative;
  `,
  IconWrapper: styled.div`
    display: flex;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  `,
};
