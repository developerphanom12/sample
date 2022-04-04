import { styled } from "app/theme";

export const AuthTabsStyles = {
  TabsWrapper: styled.div`
    display: flex;
    margin-bottom: 38px;
  `,
  ActiveTabWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 45px;
  `,
  ActiveLine: styled.div`
    height: 2px;
    background: ${({ theme }) => theme.colors.orange};
    border-radius: 10px;
  `,
  Tab: styled.div<{ isActive?: boolean }>`
    display: flex;
    font-weight: ${({ isActive, theme }) =>
      isActive ? theme.fontWeight.semiBold : theme.fontWeight.normal};
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.orange : theme.colors.black};
    font-size: ${({ theme }) => theme.size.title};
    cursor: ${({ isActive }) => !isActive && 'pointer'};
    padding-bottom: 7px;
  `,
};
