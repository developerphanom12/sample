import { styled } from 'styles/theme';

export const SubmenuStyles = {
  Wrapper: styled.ul`
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    width: 98px;
    position: absolute;
    top: 50px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: ${({ theme }) => theme.zIndex.xs};
    outline: ${({ theme }) => `1px solid ${theme.colors.boxShadowBlack}`};
    margin: 0;
    padding: 0;
    justify-content: center;
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
