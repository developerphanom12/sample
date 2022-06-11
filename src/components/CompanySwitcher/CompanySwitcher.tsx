import React from 'react';

import { CompanySwitcherStyles as Styled } from './CompanySwitcher.style';
import { MOCKED_COMPANIES_LIST } from './CompanyMock.constants';
import { CompanySwitcherMenu } from '../CompanySwitcherMenu';

export interface ICompanySwitcher {
  isLoading?: boolean;
}

export const CompanySwitcher = (props: ICompanySwitcher) => {
  const { isLoading } = props;

  const activeCompany = MOCKED_COMPANIES_LIST.find(
    (item) => item.active === true
  );
  return (
    <Styled.Wrapper>
      <Styled.Content>{activeCompany?.name}</Styled.Content>
      <Styled.Content> {activeCompany?.logo}</Styled.Content>
    </Styled.Wrapper>
  );
};
