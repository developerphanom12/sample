import React, { FC } from 'react';

import { getFirstLetterUppercase } from 'services/utils';

import { Icon } from '../../Icons';
import { UploadInput } from '../../UploadInput';
import { AvatarBoxStyles as Styled, HoverUploadLogo } from './AvatarBox.style';

interface IAvatarBoxProps {
  userFullName: string;
  id: string;
  name: string;
  onChangeAvatarHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  avatarName: string;
  avatarSrc: string;
  userRole: TRoles;
}

export const AvatarBox: FC<IAvatarBoxProps> = (props) => {
  const {
    userFullName,
    id,
    name,
    avatarName,
    avatarSrc,
    userRole,
    onChangeAvatarHandler,
  } = props;

  return (
    <Styled.MainWrapper>
      <Styled.ContentWrapper>
        <Styled.Label>Settings</Styled.Label>
        <Styled.ProfileImageWrapper>
          <UploadInput
            id={id}
            name={name}
            onChangeFiles={onChangeAvatarHandler}
          />
          <Styled.InputLabel htmlFor={id} />
          {avatarSrc ? (
            <Styled.Image imageSrc={avatarSrc} />
          ) : (
            <Styled.ImageWrapper>
              <Icon type="settingsAvatar" />
            </Styled.ImageWrapper>
          )}
          <HoverUploadLogo>
            <Icon type="cloudUpload" />
          </HoverUploadLogo>
        </Styled.ProfileImageWrapper>
      </Styled.ContentWrapper>
      <Styled.UserInfoWrapper>
        <Styled.NameAndStatus>{userFullName}</Styled.NameAndStatus>
        <Styled.NameAndStatus isStatus>
          {getFirstLetterUppercase(userRole)}
        </Styled.NameAndStatus>
      </Styled.UserInfoWrapper>
    </Styled.MainWrapper>
  );
};
