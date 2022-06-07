import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { LayoutStyles } from './Layout.style';

export const Layout: FC = () => (
  <LayoutStyles.Wrapper>
    <Header role="admin" />
    <Outlet />
  </LayoutStyles.Wrapper>
);
