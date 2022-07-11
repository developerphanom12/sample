import React from 'react';

import { CompanySwitcherLogo } from '../CompanySwitcherLogo';

import { DocumentMetricStyles as Styled } from './DocumentMetric.style';
import { DocumentMetricItemList } from './DocumentMetricItemList';
import { HeaderBox } from './HeaderBox';

interface IDocumentMetricProps {
  userName: string;
  companies: ICompaniesSwitcher[];
}

export const DocumentMetric: React.FC<IDocumentMetricProps> = (props) => {
  const { userName, companies } = props;
  return (
    <Styled.Container>
      <Styled.Head>Dashboard</Styled.Head>
      <HeaderBox userName={userName} />
      <DocumentMetricItemList />
      <Styled.CompaniesMainWrapper>
        <Styled.CompaniesTitle>Company(s)</Styled.CompaniesTitle>
        <Styled.CompaniesWrapper>
          {companies?.map((company) => (
            <Styled.CompanyItemWrapper key={company.id}>
              <CompanySwitcherLogo
                companyName={company.name}
                companyLogoSrc={company.company.logo}
              />
              <Styled.CompanyName>{company.company.name}</Styled.CompanyName>
            </Styled.CompanyItemWrapper>
          ))}
        </Styled.CompaniesWrapper>
      </Styled.CompaniesMainWrapper>
    </Styled.Container>
  );
};
