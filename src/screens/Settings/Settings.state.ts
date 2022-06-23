import { useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

import { useUploadPhoto } from 'hooks/useUploadPhoto';

export const useSettingsState = () => {
  const {
    user: { fullName },
  } = useSelector((state: IState) => state.user);

  const { fileData, onChangeFileHandler } = useUploadPhoto();

  return {
    fullName,
    fileData,
    onChangeFileHandler,
  };
};
