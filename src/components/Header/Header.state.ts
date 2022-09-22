import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';
import { getCompaniesLogoHandler, setCompanyLogoHandler } from 'services/utils';
import { useOutsideClick } from 'hooks/useOutsideClick';

import {
  setCompanySwitcher,
  setIsSwitchCompany,
} from 'screens/Settings/reducer/settings.reducer';
import { switchAccount } from 'screens/SignUp/reducer/signup.reducer';
import { logOut } from 'screens/Settings/settings.api';

import { getUserCompanies, selectActiveAccount } from './header.api';

import { getAvatarLinks } from 'constants/header-links';

export const useHeaderState = () => {
  const dispatch = useDispatch();

  const {
    user: {
      token,
      user: { active_account },
    },
    settings: { companySwitcher, isFetchingData, isSwitchCompany },
  } = useSelector((state: IState) => state);

  const activeCompany = companySwitcher?.find(
    (account) => account.id === active_account
  );

  const [isAvatarHover, setIsAvatarHover] = useState(false);
  const [isOpenSwitcher, setIsOpenSwitcher] = useState(false);
  const [activeAccountId, setActiveAccountId] = useState(active_account || '');

  const onMouseEnterHandler = () => setIsAvatarHover(true);
  const onMouseLeaveHandler = () => setIsAvatarHover(false);
  const onClickSwitcherHandler = () => setIsOpenSwitcher(!isOpenSwitcher);
  const onClickOutsideSwitcherHandler = () => setIsOpenSwitcher(false);

  const switcherRef = useOutsideClick(onClickOutsideSwitcherHandler);

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

  const avatarLinks = getAvatarLinks(onLogOut);

  const onSwitchCompany = async (id?: string) => {
    try {
      setActiveAccountId(id || companySwitcher[0].id);
      const { data } = await selectActiveAccount(id || companySwitcher[0].id);
      dispatch(switchAccount(data));
      isSwitchCompany && dispatch(setIsSwitchCompany(false));
    } catch (error) {
      console.log(error);
    }
  };

  const onSwitchCompanyHandler = (event: React.MouseEvent<HTMLDivElement>) =>
    onSwitchCompany(event.currentTarget.id);

  const onGetAllCompaniesHandler = async () => {
    try {
      const { data } = await getUserCompanies();
      const companiesLogo = await getCompaniesLogoHandler(data, token);
      const companiesWithLogo = setCompanyLogoHandler(data, companiesLogo);

      dispatch(setCompanySwitcher(companiesWithLogo));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isOpenSwitcher,
    isFetchingData,
    isSwitchCompany,
    onClickSwitcherHandler,
    onSwitchCompanyHandler,
    onSwitchCompany,
    switcherRef,
    companySwitcher,
    activeCompany,
    activeAccountId,
    active_account,
    isAvatarHover,
    avatarLinks,
    onGetAllCompaniesHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  };
};
