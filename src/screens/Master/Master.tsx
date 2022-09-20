import React from 'react';

import { useMasterState } from './Master.state';
import { MasterStyles as Styled } from './Master.style';

import { MASTER_TABS } from 'constants/header-links';
import { CategoriesTab } from './CategoriesTab';
import { TypesTab } from './TypesTab/TypesTab';
import { SupliersTab } from './SupliersTab/SupliersTab';

export const Master: React.FC = () => {
  const activeTabName = useMasterState();

  return (
    <Styled.Section>
      <Styled.ContentWrapper>
        <Styled.TabContent active={activeTabName === MASTER_TABS[0]}>
          <CategoriesTab />
        </Styled.TabContent>
        <Styled.TabContent active={activeTabName === MASTER_TABS[1]}>
          <SupliersTab />
        </Styled.TabContent>
        <Styled.TabContent active={activeTabName === MASTER_TABS[2]}>
          <TypesTab />
        </Styled.TabContent>
      </Styled.ContentWrapper>
    </Styled.Section>
  );
};
