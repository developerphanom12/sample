import { CompanySwitcherLogo } from '../CompanySwitcherLogo';

import { CompanyItemStyles as Styled } from './CompanyItem.style';

export const CompanyItem = () => {
  return (
    <Styled.Item>
      <Styled.CompanyNameWrapper>
        {/* <CompanySwitcherLogo
          companyLogoSrc={companyLogoSrc}
          companyName={companyName}
        /> */}
      </Styled.CompanyNameWrapper>
    </Styled.Item>
  );
};
