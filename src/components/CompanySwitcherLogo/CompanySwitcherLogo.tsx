import { FC } from 'react';

import { getCompanyInitials } from 'services/utils';

import { CompanySwitcherLogoStyles as Styled } from './CompanySwitcherLogo.style';

interface ICompanySwitcherLogoProps {
  companyLogoSrc: string;
  companyName: string;
}

export const CompanySwitcherLogo: FC<ICompanySwitcherLogoProps> = (props) => {
  const { companyLogoSrc, companyName } = props;
  const companyInitials = getCompanyInitials(companyName);

  return !!companyLogoSrc ? (
    <Styled.LogoImage src={companyLogoSrc} alt={companyName} />
  ) : (
    <Styled.Wrapper>
      <Styled.Text>{companyInitials}</Styled.Text>
    </Styled.Wrapper>
  );
};
