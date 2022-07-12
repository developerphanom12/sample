import { FC } from 'react';

import { LinkItem } from '../LinkItem';
import { useLinkListState } from './LinkList.state';
import { LinksListStyles as Styled } from './LinksList.style';

export const LinksList: FC = () => {
  const settingsLink = useLinkListState();
  return (
    <Styled.LinksWrapper data-testid="links">
      {settingsLink.map((link) => (
        <LinkItem
          key={link.title}
          path={link.route}
          title={link.title}
          onClick={link.onClick}
          exact={link.route === '/settings'}
        />
      ))}
    </Styled.LinksWrapper>
  );
};
