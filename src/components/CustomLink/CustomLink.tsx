import React from 'react';
import { useMatch } from 'react-router-dom';

import { TabItem } from '../TabItem';
import { CustomLinkStyles as Styled } from './CustomLink.style';

export interface CustomLinkProps {
  isLast?: boolean;
  tabs?: string[];
  isDisabled?: boolean;
  children: React.ReactNode;
  to: string;
}

export const CustomLink = (props: CustomLinkProps) => {
  const { children, to, isLast, tabs, isDisabled } = props;

  const isActive = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Styled.Link
      data-testid="header-link"
      is_last={`${isLast}`}
      active={isActive}
      to={to}
      is_disabled={isDisabled ? `${isDisabled}` : ''}
    >
      {children}
      <Styled.TabsWrapper>
        {isActive && tabs?.map((tab) => <TabItem key={tab} tabName={tab} />)}
      </Styled.TabsWrapper>
    </Styled.Link>
  );
};
