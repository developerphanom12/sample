import { FC } from 'react';

import { CompanySwitcherStyles as Styled } from './CompanySwitcher.style';
import { CompanySwitcherMenu } from '../CompanySwitcherMenu';
import { CompanySwitcherLogo } from '../CompanySwitcherLogo';

export interface ICompanySwitcher {
  isLoading?: boolean;
  activeCompany?: ICompaniesSwitcher;
  activeAccountId: string;
  isOpenSwitcher: boolean;
  onClickSwitcherHandler: () => void;
  onSwitchCompanyHandler: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  switcherRef: React.MutableRefObject<null>;
  companies: ICompaniesSwitcher[];
}

export const CompanySwitcher: FC<ICompanySwitcher> = (props) => {
  const {
    isLoading,
    isOpenSwitcher,
    switcherRef,
    companies,
    activeCompany,
    activeAccountId,
    onSwitchCompanyHandler,
    onClickSwitcherHandler,
  } = props;
  
  return (
    <Styled.Wrapper data-testid='company-switcher' ref={switcherRef} onClick={onClickSwitcherHandler}>
      <CompanySwitcherLogo
        companyLogoSrc={activeCompany?.company.logo || ''}
        companyName={activeCompany?.company.name || ''}
      />
      <Styled.Content>{activeCompany?.company.name}</Styled.Content>
      {isOpenSwitcher && (
        <CompanySwitcherMenu
          onSwitchCompanyHandler={onSwitchCompanyHandler}
          companies={companies}
          activeAccountId={activeAccountId}
        />
      )}
    </Styled.Wrapper>
  );
};
