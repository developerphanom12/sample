import { styled } from 'styles/theme';

export const SubmenuStyles = {
  Wrapper: styled.ul<{ isTooltip: boolean }>`
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    width: 120px;
    position: absolute;
    top: 55px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: ${({ theme }) => theme.zIndex.xs};
    outline: ${({ theme }) => `1px solid ${theme.colors.boxShadowBlack}`};
    margin: 0;
    padding: 0;
    justify-content: center;
    ${({ theme, isTooltip }) =>
      !isTooltip &&
      `
      ::before {
        content: '';
        position: absolute;
        top: -14px;
        left: 15px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        cursor: pointer;
        border-bottom:  14px solid  ${theme.colors.white};
      }`}
  `,
  Item: styled.li<{ isActive: boolean }>`
    padding: 10px 12px;
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: ${({ theme }) => theme.size.biggerSmall};
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.pink : ''};
    :hover {
      background-color: ${({ theme }) => theme.colors.pink};
    }
    :first-child {
      border-radius: 6px 6px 0px 0px;
    }
    :last-child {
      border-radius: 0 0 6px 6px;
    }
  `,
};
