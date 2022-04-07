import React from 'react';
import { useMatch } from 'react-router-dom';

import { CustomLinkStyles as Styled } from './CustomLink.style';

export interface CustomLinkProps {
  children: React.ReactNode;
  to: string;
}

export const CustomLink = (props: CustomLinkProps) => {
  const { children, to } = props;

  const isActive = useMatch(to);

  return (
    <Styled.Link active={isActive} to={to}>
      {children}
    </Styled.Link>
  );
};
