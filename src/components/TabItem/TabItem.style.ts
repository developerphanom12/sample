import { styled } from 'styles/theme';

export const TabItemStyle = {
  Wrapper: styled.li<{ isActive?: boolean }>`
    font-weight: ${({ theme, isActive }) =>
      isActive ? theme.fontWeight.semiBold : theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.orange : theme.colors.black};
    padding-bottom: 5px;
    margin-right: 35px;
    cursor: pointer;
    position: relative;
    &::before {
      ${({ theme, isActive }) =>
        isActive &&
        `
        position: absolute;
        content: '';
        bottom: 0;
        width: 100%;
        height: 2px;
        background: ${theme.colors.orange};
        border-radius: 10px;`}
    }
    &:last-child {
      margin-right: 0;
    }
  `,
};
