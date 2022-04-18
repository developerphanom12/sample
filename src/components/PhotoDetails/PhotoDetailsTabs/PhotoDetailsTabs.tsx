import { FC } from 'react';

import { PhotoDetailsTabsStyles as Styled } from './PhotoDetailsTabs.styles';

export const PhotoDetailsTabs: FC = () =>  (
    <Styled.TabsWrapper>
      <Styled.ActiveTabWrapper>
        <Styled.Tab isActive={true}>Details</Styled.Tab>
      </Styled.ActiveTabWrapper>
    </Styled.TabsWrapper>
  );

