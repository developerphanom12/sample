import React from 'react';

import { Icon } from '../../Icons';
import { CompanySwitcherMenuItemStyles as Styled } from './CompanySwitcherMenuItem.style';

export interface ICompanySwitcherMenuItem {
  isLoading?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  isActive?: boolean;
}

export const CompanySwitcherMenuItem = (props: ICompanySwitcherMenuItem) => {
  const { isLoading, onClick, children, isActive } = props;
  return (
    <Styled.Item>
      <Styled.Content>{children}</Styled.Content>
      {isActive && (
        <Styled.Logo>
          <Icon type="active" />
        </Styled.Logo>
      )}
    </Styled.Item>
  );
};
