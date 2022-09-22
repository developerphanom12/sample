import { styled } from 'styles/theme';

export const PhotoDetailsTabsStyles = {
  TabsWrapper: styled.div`
    display: flex;
    margin: 8px 0;
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
    position: relative;
    font-weight: ${({ isActive, theme }) =>
      isActive ? theme.fontWeight.semiBold : theme.fontWeight.normal};
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.darkRed : theme.colors.black};
    font-size: ${({ theme }) => theme.size.default};
    cursor: ${({ isActive }) => !isActive && 'pointer'};
    padding-bottom: 7px;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      bottom: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.darkRed};
      border-radius: 10px;
    }
  `,
};
