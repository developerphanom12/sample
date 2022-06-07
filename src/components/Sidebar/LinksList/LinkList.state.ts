import { useDispatch } from 'react-redux';

import { logOut } from 'screens/Settings/settings.api';

import { getSettingsLinks } from './LinksList.constants';

export const useLinkListState = () => {
  const dispatch = useDispatch();

  const onLogOut = async () => {
    try {
      const { data } = await logOut();
      data.message === 'Success' &&
        dispatch({
          type: 'LOGOUT',
        });
    } catch (error) {
      console.log(error);
    }
  };

  const settingsLink = getSettingsLinks(onLogOut);

  return settingsLink;
};
