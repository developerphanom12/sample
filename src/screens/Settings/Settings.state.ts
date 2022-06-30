import { useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

import { useUploadPhoto } from 'hooks/useUploadPhoto';

export const useSettingsState = () => {
  const {
    user: { fullName, active_account, accounts },
  } = useSelector((state: IState) => state.user);

  const { fileData, onChangeFileHandler } = useUploadPhoto();

  const activeAccount = accounts?.find(
    (account) => account.id === active_account
  );

  return {
    fullName,
    fileData,
    activeAccount,
    onChangeFileHandler,
  };
};
