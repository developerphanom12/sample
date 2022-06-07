import { FC } from 'react';

import { BulkEditContentStyles as Styled } from './BulkEditContent.style';

interface IBulkEditItemProps {
  label: string;
  children: React.ReactNode;
}

export const BulkEditContentItem: FC<IBulkEditItemProps> = (props) => {
  const { label, children } = props;
  return (
    <Styled.ItemWrapper>
      <Styled.Label>{label}</Styled.Label>
      <Styled.ChildrenWrapper>{children}</Styled.ChildrenWrapper>
    </Styled.ItemWrapper>
  );
};
