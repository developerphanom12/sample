import { useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

export const useSettingsState = () => {
  const {
    user: { fullName },
  } = useSelector((state: IState) => state.user);

  return fullName;
};
