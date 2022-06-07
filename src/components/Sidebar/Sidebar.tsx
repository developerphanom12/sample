import { FC } from 'react';

import { AvatarBox } from './AvatarBox';
import { LinksList } from './LinksList';
import { SidebarStyles as Styled } from './Sidebar.style';

interface ISideBar {
  userFullName: string;
}

export const Sidebar: FC<ISideBar> = (props) => {
  const { userFullName } = props;
  return (
    <Styled.MainWrapper>
      <AvatarBox userFullName={userFullName} />
      <LinksList />
    </Styled.MainWrapper>
  );
};
