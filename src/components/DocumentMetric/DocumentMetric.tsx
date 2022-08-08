import React from 'react';

import { ICompanyDashboard } from 'screens/Dashboard/types';
import { getFormattedDate } from 'services/utils';

import { CompanySwitcherLogo } from '../CompanySwitcherLogo';

import { DocumentMetricStyles as Styled } from './DocumentMetric.style';
import { DocumentMetricItemList } from './DocumentMetricItemList';
import { HeaderBox } from './HeaderBox';

interface IDocumentMetricProps {
  userName: string;
  companies: ICompanyDashboard[];
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
          {companies?.map(({ company, company_owner }) => (
            <Styled.CompanyItemWrapper data-testid='company-item' key={company.id}>
              <Styled.CompanyInfoLeftBlock>
                <CompanySwitcherLogo
                  companyName={company.name}
                  companyLogoSrc={company.logo}
                />
                <Styled.CompanyName>{company.name}</Styled.CompanyName>
              </Styled.CompanyInfoLeftBlock>
              <Styled.CompanyInfoRightBlock>
                <Styled.CompanyInfo>
                  {`Created on: `}
                  {getFormattedDate(company.created, company.date_format)}
                </Styled.CompanyInfo>
                <Styled.CompanyInfo>
                  Created by: {company_owner.name}
                </Styled.CompanyInfo>
              </Styled.CompanyInfoRightBlock>
            </Styled.CompanyItemWrapper>
          ))}
        </Styled.CompaniesWrapper>
      </Styled.CompaniesMainWrapper>
    </Styled.Container>
  );
};
