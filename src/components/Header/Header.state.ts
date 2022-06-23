import { useState } from 'react';

import { useOutsideClick } from 'hooks/useOutsideClick';
import { getUserCompanies } from './header.api';

export const useHeaderState = () => {
  const [isOpenSwitcher, setIsOpenSwitcher] = useState(false);

  const onClickSwitcherHandler = () => setIsOpenSwitcher(!isOpenSwitcher);
  const onClickOutsideSwitcherHandler = () => setIsOpenSwitcher(false);

  const switcherRef = useOutsideClick(onClickOutsideSwitcherHandler);

  const onSwitchCompanyHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {};

  const onGetAllCompaniesHandler = async () => {
    try {
      const { data } = await getUserCompanies();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isOpenSwitcher,
    onClickSwitcherHandler,
    onSwitchCompanyHandler,
    switcherRef,
    onGetAllCompaniesHandler,
  };
};
