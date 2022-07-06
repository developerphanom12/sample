import React, { FC } from 'react';

import { AvatarBox } from './AvatarBox';
import { LinksList } from './LinksList';
import { SidebarStyles as Styled } from './Sidebar.style';

interface ISideBar {
  userRole: TRoles;
  userFullName: string;
  avatatSrc: string;
  onUploadProfilePhotoHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  isUploadingPhoto: boolean;
  isHover: boolean;
  onMouseEnterHandler: () => void;
  onMouseLeaveHandler: () => void;
}

export const Sidebar: FC<ISideBar> = (props) => {
  const {
    userFullName,
    userRole,
    avatatSrc,
    isUploadingPhoto,
    isHover,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onUploadProfilePhotoHandler,
  } = props;
  return (
    <Styled.MainWrapper>
      <AvatarBox
        id="avatar"
        name="avatar"
        isUploadingPhoto={isUploadingPhoto}
        userRole={userRole}
        avatarSrc={avatatSrc}
        onChangeAvatarHandler={onUploadProfilePhotoHandler}
        userFullName={userFullName}
        isHover={isHover}
        onMouseEnterHandler={onMouseEnterHandler}
        onMouseLeaveHandler={onMouseLeaveHandler}
      />
      <LinksList />
    </Styled.MainWrapper>
  );
};
