import React, { FC } from 'react';

import { AvatarBox } from './AvatarBox';
import { LinksList } from './LinksList';
import { SidebarStyles as Styled } from './Sidebar.style';

interface ISideBar {
  userFullName: string;
  avatarName: string;
  avatatSrc: string;
  onChangeFileHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Sidebar: FC<ISideBar> = (props) => {
  const {
    userFullName,
    avatarName,
    avatatSrc,
    onChangeFileHandler,
  } = props;
  return (
    <Styled.MainWrapper>
      <AvatarBox
        id="avatar"
        name="avatar"
        avatarName={avatarName}
        avatarSrc={avatatSrc}
        onChangeAvatarHandler={onChangeFileHandler}
        userFullName={userFullName}
      />
      <LinksList />
    </Styled.MainWrapper>
  );
};
