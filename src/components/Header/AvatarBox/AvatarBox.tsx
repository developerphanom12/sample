import { FC } from 'react';

import { AvatarSubmenu } from '../AvatarSubmenu';
import { LoaderComponent } from '../../Loader';
import { Avatar } from '../../Avatar/Avatar';

import { AvatarBoxStyles as Styled } from './AvatarBox.style';

import { ROUTES } from 'constants/routes';

interface IAvatarBoxProps extends IAvatarSubmenuLinks {
  active_account: string | null;
  onMouseEnterHandler: () => void;
  onMouseLeaveHandler: () => void;
  userProfilePhoto: string;
  isUploadingPhoto: boolean;
  isAvatarHover: boolean;
}
export const AvatarBox: FC<IAvatarBoxProps> = (props) => {
  const {
    onMouseEnterHandler,
    onMouseLeaveHandler,
    userProfilePhoto,
    active_account,
    isUploadingPhoto,
    isAvatarHover,
    menuItems,
  } = props;
  return (
    <Styled.AvatarWrapper
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <Styled.Link to={active_account ? ROUTES.settings : ''}>
        {isUploadingPhoto ? (
          <Styled.LoaderWrapper>
            <LoaderComponent theme="avatarMin" />
          </Styled.LoaderWrapper>
        ) : userProfilePhoto ? (
          <Styled.Avatar src={userProfilePhoto} alt="avatar" />
        ) : (
          <Avatar />
        )}
      </Styled.Link>
      {isAvatarHover && <AvatarSubmenu menuItems={menuItems} />}
    </Styled.AvatarWrapper>
  );
};
