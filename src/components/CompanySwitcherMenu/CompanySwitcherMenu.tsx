import { FC } from 'react';

import { CompanySwitcherMenuStyles as Styled } from './CompanySwitcherMenu.style';
import { CompanySwitcherMenuItem } from './CompanySwitcherMenuItem';

import { MOCKED_COMPANIES_LIST } from '../CompanySwitcher/CompanyMock.constants';

export interface ICompanySwitcherMenu {
  isLoading?: boolean;
  selectedCompanyId: string;
  onSwitchCompanyHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const CompanySwitcherMenu: FC<ICompanySwitcherMenu> = (props) => {
  const { isLoading, selectedCompanyId, onSwitchCompanyHandler } = props;
  return (
    <Styled.Wrapper>
      <Styled.Title>Company(s)</Styled.Title>
      {MOCKED_COMPANIES_LIST.map((item) => (
        <CompanySwitcherMenuItem
          isActive={item.name === selectedCompanyId}
          companyId={item.name}
          companyName={item.name}
          onClick={onSwitchCompanyHandler}
          key={item.name}
          companyLogoSrc=""
        />
      ))}
    </Styled.Wrapper>
  );
};
