import React from 'react';

import { CompanySwitcherMenuStyles as Styled } from './CompanySwitcherMenu.style';

import { MOCKED_COMPANIES_LIST } from './CompanyMock.constants';

export interface ICompanySwitcherMenuMenu {
  isLoading?: boolean;
  onClick?: () => void;
}

export const CompanySwitcherMenuMenu = (props: ICompanySwitcherMenuMenu) => {
  const { isLoading, onClick } = props;
  return (
    <Styled.Wrapper>
      {MOCKED_COMPANIES_LIST.map((item) => (
        <Styled.Item onClick={onClick}>{item.name}</Styled.Item>
      ))}
    </Styled.Wrapper>
  );
};
