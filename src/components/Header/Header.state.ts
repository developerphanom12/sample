import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';
import { useOutsideClick } from 'hooks/useOutsideClick';

import { setCompanySwitcher } from '../../screens/Settings/reducer/settings.reducer';

import { getCompanyMembers, selectActiveAccount } from './header.api';
import { switchAccount } from '../../screens/SignUp/reducer/signup.reducer';

export const useHeaderState = () => {
  const dispatch = useDispatch();

  const {
    user: {
      user: { active_account },
    },
    settings: { companySwitcher },
  } = useSelector((state: IState) => state);

  const activeCompany = companySwitcher?.find(
    (account) => account.id === active_account
  );

  const [isOpenSwitcher, setIsOpenSwitcher] = useState(false);
  const [activeAccountId, setActiveAccountId] = useState(active_account || '');

  const onClickSwitcherHandler = () => setIsOpenSwitcher(!isOpenSwitcher);
  const onClickOutsideSwitcherHandler = () => setIsOpenSwitcher(false);

  const switcherRef = useOutsideClick(onClickOutsideSwitcherHandler);

  const onSwitchCompanyHandler = async (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    try {
      setActiveAccountId(event.currentTarget.id);
      const { data } = await selectActiveAccount(event.currentTarget.id);
      dispatch(switchAccount(data));
    } catch (error) {
      console.log(error);
    }
  };

  const onGetAllCompaniesHandler = async () => {
    try {
      const { data } = await getCompanyMembers();
      dispatch(setCompanySwitcher(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isOpenSwitcher,
    onClickSwitcherHandler,
    onSwitchCompanyHandler,
    switcherRef,
    companySwitcher,
    activeCompany,
    activeAccountId,
    onGetAllCompaniesHandler,
  };
};
