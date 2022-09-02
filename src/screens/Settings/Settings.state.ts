import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

import { getProfilePhoto, profileUploadPhoto } from './settings.api';
import { setUserAvatar } from '../SignUp/reducer/signup.reducer';

export const useSettingsState = () => {
  const {
    user: { fullName, active_account, accounts, profile_image },
    token,
  } = useSelector((state: IState) => state.user);

  const dispatch = useDispatch();
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(
    !profile_image ? false : true
  );
  const [isHover, setIsHover] = useState(false);
  const [userProfilePhoto, setUserProfilePhoto] = useState('');

  const onMouseEnterHandler = () => setIsHover(true);
  const onMouseLeaveHandler = () => setIsHover(false);

  const onGetProfilePhoto = async (profileImage?: string) => {
    try {
      if (!profileImage) return;
      const { data } = await getProfilePhoto(
        profileImage || profile_image,
        token
      );
      setIsUploadingPhoto(false);
      setUserProfilePhoto(URL.createObjectURL(data));
    } catch (error) {
      setIsUploadingPhoto(false);
      console.log(error);
    }
  };

  const onUploadProfilePhotoHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      if (
        !event.target.files?.length ||
        !event.target.files[0].type.match('image')
      )
        return;
      setIsHover(false);
      const formData = new FormData();
      formData.append('profile_image', event.target.files[0]);
      setIsUploadingPhoto(true);
      const { data } = await profileUploadPhoto(formData, token);
      dispatch(setUserAvatar(data.profile_image));
      onGetProfilePhoto(data.profile_image);
    } catch (error) {
      setIsHover(false);
      setIsUploadingPhoto(false);
      console.log(error);
    }
  };

  const activeAccount = accounts?.find(
    (account) => account.id === active_account
  );

  return {
    fullName,
    activeAccount,
    isUploadingPhoto,
    isHover,
    userProfilePhoto,
    active_account,
    profile_image,
    onGetProfilePhoto,
    onMouseEnterHandler,
    onUploadProfilePhotoHandler,
    onMouseLeaveHandler,
  };
};
