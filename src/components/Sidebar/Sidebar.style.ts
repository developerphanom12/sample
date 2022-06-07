import { styled } from 'app/theme';

export const SidebarStyles = {
  MainWrapper: styled.aside`
    min-width: 300px;
    background: ${({ theme }) => theme.colors.white};
    height: 100%;
    margin-right: 15px;
  `,
};
