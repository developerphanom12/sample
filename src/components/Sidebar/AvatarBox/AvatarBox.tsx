import { FC } from 'react';

import { Icon } from '../../Icons';
import { AvatarBoxStyles as Styled } from './AvatarBox.style';

interface IAvatarBoxProps {
  userFullName: string;
}

export const AvatarBox: FC<IAvatarBoxProps> = (props) => {
  const { userFullName } = props;
  return (
    <Styled.MainWrapper>
      <Styled.ContentWrapper>
        <Styled.Label>Settings</Styled.Label>
        <Styled.ImageWrapper>
          <Icon type="settingsAvatar" />
        </Styled.ImageWrapper>
      </Styled.ContentWrapper>
      <Styled.UserInfoWrapper>
        <Styled.NameAndStatus>{userFullName}</Styled.NameAndStatus>
        <Styled.NameAndStatus isStatus>Administrator</Styled.NameAndStatus>
      </Styled.UserInfoWrapper>
    </Styled.MainWrapper>
  );
};
