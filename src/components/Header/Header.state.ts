import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';
import { useOutsideClick } from 'hooks/useOutsideClick';

import {
  setCompanySwitcher,
  setIsSwitchCompany,
} from 'screens/Settings/reducer/settings.reducer';
import { switchAccount } from 'screens/SignUp/reducer/signup.reducer';
import { getCompanyLogo } from 'screens/Settings/settings.api';

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

  const getCompaniesLogoHandler = async (data: ICompaniesSwitcher[]) => {
    try {
      const promiss = data.map(async (item) => {
        if (item.company.logo) {
          const { data } = await getCompanyLogo(item.company.id, token);
          return URL.createObjectURL(data);
        } else {
          return null;
        }
      });
      const companiesLogo = await Promise.all(promiss);
      return companiesLogo;
    } catch (error) {
      console.log(error);
    }
  };

  const setCompanyLogoHandler = (
    data: ICompaniesSwitcher[],
    companiesLogo?: (string | null)[]
  ) => {
    return data.map((item: ICompaniesSwitcher, index: number) => {
      if (companiesLogo?.length && companiesLogo[index] === null) {
        return item;
      }
      if (companiesLogo?.length && companiesLogo[index] !== null) {
        return {
          ...item,
          company: { ...item.company, logo: companiesLogo[index] },
        };
      }
      return item;
    });
  };
  const onGetAllCompaniesHandler = async () => {
    try {
      const { data } = await getUserCompanies();
      const companiesLogo = await getCompaniesLogoHandler(data);
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
