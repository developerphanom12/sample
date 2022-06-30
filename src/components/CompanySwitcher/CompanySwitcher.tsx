import { FC } from 'react';

import { CompanySwitcherStyles as Styled } from './CompanySwitcher.style';
import { MOCKED_COMPANIES_LIST } from './CompanyMock.constants';
import { CompanySwitcherMenu } from '../CompanySwitcherMenu';
import { CompanySwitcherLogo } from '../CompanySwitcherLogo';

export interface ICompanySwitcher {
  isLoading?: boolean;
  isOpenSwitcher: boolean;
  onClickSwitcherHandler: () => void;
  onSwitchCompanyHandler: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  switcherRef: React.MutableRefObject<null>;
}

export const CompanySwitcher: FC<ICompanySwitcher> = (props) => {
  const {
    isLoading,
    isOpenSwitcher,
    switcherRef,
    onSwitchCompanyHandler,
    onClickSwitcherHandler,
  } = props;

  const activeCompany = MOCKED_COMPANIES_LIST.find(
    (item) => item.active === true
  );
  return (
    <Styled.Wrapper ref={switcherRef} onClick={onClickSwitcherHandler}>
      <CompanySwitcherLogo
        companyLogoSrc=""
        companyName={activeCompany?.name || ''}
      />
      <Styled.Content>{activeCompany?.name}</Styled.Content>
      {isOpenSwitcher && (
        <CompanySwitcherMenu
          onSwitchCompanyHandler={onSwitchCompanyHandler}
          selectedCompanyId=""
        />
      )}
    </Styled.Wrapper>
  );
};
