import React from 'react';

import { CompanySwitcherMenuStyles as Styled } from './CompanySwitcherMenu.style';
import { CompanySwitcherMenuItem } from './CompanySwitcherMenuItem';

import { MOCKED_COMPANIES_LIST } from '../CompanySwitcher/CompanyMock.constants';

export interface ICompanySwitcherMenu {
  isLoading?: boolean;
  isActive?: boolean;
}

export const CompanySwitcherMenu = (props: ICompanySwitcherMenu) => {
  const { isLoading } = props;
  return (
    <Styled.Wrapper>
      {MOCKED_COMPANIES_LIST.map((item) => (
        <CompanySwitcherMenuItem>
          {item.name}
          {item.logo}
        </CompanySwitcherMenuItem>
      ))}
    </Styled.Wrapper>
  );
};
