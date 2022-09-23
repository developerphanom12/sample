import { useCallback, useEffect, useState } from 'react';

import { getProfilePhoto } from 'screens/Settings/settings.api';

export const useUploadAvatar = (profile_image: string, token: string) => {
  const [userProfilePhoto, setUserProfilePhoto] = useState('');

  const [isUploadingPhoto, setIsUploadingPhoto] = useState(
    !profile_image ? false : true
  );

  const onGetProfilePhoto = useCallback(async () => {
    try {
      if (!profile_image) return;
      setIsUploadingPhoto(true);
      const { data } = await getProfilePhoto(profile_image, token);
      setIsUploadingPhoto(false);
      setUserProfilePhoto(URL.createObjectURL(data));
    } catch (error) {
      setIsUploadingPhoto(false);
      console.log(error);
    }
  }, [profile_image]);

  useEffect(() => {
    onGetProfilePhoto();
  }, [profile_image]);

  return { userProfilePhoto, isUploadingPhoto };
};
