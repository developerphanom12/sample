import React from 'react';

import { CompanySwitcherStyles as Styled } from './CompanySwitcher.style';
import { MOCKED_COMPANIES_LIST } from './CompanyMock.constants';
import { CompanySwitcherMenu } from '../CompanySwitcherMenu';

export interface ICompanySwitcher {
  isLoading?: boolean;
  isOpenSwitcher: boolean;
  onClickSwitcherHandler: () => void;
  onSwitchCompanyHandler: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  switcherRef: React.MutableRefObject<null>;
}

export const CompanySwitcher = (props: ICompanySwitcher) => {
  const { isLoading, isOpenSwitcher, switcherRef, onSwitchCompanyHandler, onClickSwitcherHandler } =
    props;

  const activeCompany = MOCKED_COMPANIES_LIST.find(
    (item) => item.active === true
  );
  return (
    <Styled.Wrapper ref={switcherRef} onClick={onClickSwitcherHandler}>
      <Styled.Content>{activeCompany?.name}</Styled.Content>
      <Styled.Content> {activeCompany?.logo}</Styled.Content>
      {isOpenSwitcher && <CompanySwitcherMenu onSwitchCompanyHandler={onSwitchCompanyHandler} />}
    </Styled.Wrapper>
  );
};
