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

import { getUserCompanies, selectActiveAccount } from './header.api';

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

  const [isOpenSwitcher, setIsOpenSwitcher] = useState(false);
  const [activeAccountId, setActiveAccountId] = useState(active_account || '');

  const onClickSwitcherHandler = () => setIsOpenSwitcher(!isOpenSwitcher);
  const onClickOutsideSwitcherHandler = () => setIsOpenSwitcher(false);

  const switcherRef = useOutsideClick(onClickOutsideSwitcherHandler);

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
    onGetAllCompaniesHandler,
  };
};
