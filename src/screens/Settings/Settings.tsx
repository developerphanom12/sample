import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from 'components/Sidebar';

import { SettingsStyles } from './Settings.style';
import { useSettingsState } from './Settings.state';

export const Settings: FC = () => {
  const {
    fullName,
    activeAccount,
    onUploadProfilePhotoHandler,
    isUploadingPhoto,
    isHover,
    userProfilePhoto,
    onGetProfilePhoto,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  } = useSettingsState();

  useEffect(() => {
    onGetProfilePhoto();
  }, []);
  return (
    <SettingsStyles.Wrapper>
      <Sidebar
        isHover={isHover}
        onMouseEnterHandler={onMouseEnterHandler}
        onMouseLeaveHandler={onMouseLeaveHandler}
        isUploadingPhoto={isUploadingPhoto}
        avatatSrc={userProfilePhoto}
        userFullName={fullName}
        userRole={activeAccount?.role as TRoles}
        onUploadProfilePhotoHandler={onUploadProfilePhotoHandler}
      />
      <Outlet />
    </SettingsStyles.Wrapper>
  );
};
