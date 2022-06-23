import React from 'react';

import { Icon } from '../../Icons';
import { CompanySwitcherMenuItemStyles as Styled } from './CompanySwitcherMenuItem.style';

export interface ICompanySwitcherMenuItem {
  isLoading?: boolean;
  children?: React.ReactNode;
  isActive?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  companyId: string;
}

export const CompanySwitcherMenuItem = (props: ICompanySwitcherMenuItem) => {
  const { isLoading, onClick, companyId, children, isActive } = props;
  return (
    <Styled.Item onClick={onClick} id={companyId}>
      <Styled.Content>{children}</Styled.Content>
      {isActive && (
        <Styled.Logo>
          <Icon type="active" />
        </Styled.Logo>
      )}
    </Styled.Item>
  );
};
