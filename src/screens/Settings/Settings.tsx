import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from 'components/Sidebar';

import { SettingsStyles } from './Settings.style';
import { useSettingsState } from './Settings.state';

export const Settings: FC = () => {
  const userFullName = useSettingsState();
  return (
    <SettingsStyles.Wrapper>
      <Sidebar userFullName={userFullName} />
      <Outlet />
    </SettingsStyles.Wrapper>
  );
};
