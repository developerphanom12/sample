import { FC } from 'react';

import { CompanySwitcherMenuStyles as Styled } from './CompanySwitcherMenu.style';
import { CompanySwitcherMenuItem } from './CompanySwitcherMenuItem';

import { MOCKED_COMPANIES_LIST } from '../CompanySwitcher/CompanyMock.constants';

export interface ICompanySwitcherMenu {
  onSwitchCompanyHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
  isLoading?: boolean;
  isActive?: boolean;
}

export const CompanySwitcherMenu: FC<ICompanySwitcherMenu> = (props) => {
  const { isLoading, onSwitchCompanyHandler } = props;
  return (
    <Styled.Wrapper>
      {MOCKED_COMPANIES_LIST.map((item) => (
        <CompanySwitcherMenuItem
          companyId={item.name}
          onClick={onSwitchCompanyHandler}
          key={item.name}
        >
          {item.name}
          {item.logo}
        </CompanySwitcherMenuItem>
      ))}
    </Styled.Wrapper>
  );
};
