import React from 'react';
import { useMatch } from 'react-router-dom';

import { TabItem } from '../TabItem';
import { CustomLinkStyles as Styled } from './CustomLink.style';

export interface CustomLinkProps {
  isLast?: boolean;
  tabs?: string[];
  children: React.ReactNode;
  to: string;
  isLast?: boolean;
}

export const CustomLink = (props: CustomLinkProps) => {
  const { children, to, isLast, tabs } = props;

  const isActive = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Styled.Link is_last={`${isLast}`} active={isActive} to={to}>
      {children}
      <Styled.TabsWrapper>
        {isActive && tabs?.map((tab) => <TabItem key={tab} tabName={tab} />)}
      </Styled.TabsWrapper>
    </Styled.Link>
  );
};
