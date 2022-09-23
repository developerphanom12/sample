import { useLogout } from 'hooks/useLogout';

import { getSettingsLinks } from './LinksList.constants';

export const useLinkListState = () => {
  const logoutHandler = useLogout();
  const onLogOut = () => logoutHandler();

  const settingsLink = getSettingsLinks(onLogOut);

  return settingsLink;
};
