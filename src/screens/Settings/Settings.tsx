import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from 'components/Sidebar';

import { SettingsStyles } from './Settings.style';
import { useSettingsState } from './Settings.state';

export const Settings: FC = () => {
  const { fileData, fullName, activeAccount, onChangeFileHandler } =
    useSettingsState();
  return (
    <SettingsStyles.Wrapper>
      <Sidebar
        avatarName={fileData.fileName}
        avatatSrc={fileData.fileSrc}
        userFullName={fullName}
        userRole={activeAccount?.role as TRoles}
        onChangeFileHandler={onChangeFileHandler}
      />
      <Outlet />
    </SettingsStyles.Wrapper>
  );
};
