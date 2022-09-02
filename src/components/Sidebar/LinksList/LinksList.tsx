import { FC } from 'react';
import { ROUTES } from '../../../constants/routes';

import { LinkItem } from '../LinkItem';
import { useLinkListState } from './LinkList.state';
import { LinksListStyles as Styled } from './LinksList.style';

interface ILinksList {
  isActiveAccount: boolean;
}
export const LinksList: FC<ILinksList> = (props) => {
  const { isActiveAccount } = props;
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
          isDisabled={
            !isActiveAccount &&
            link.route !== ROUTES.settings &&
            !isActiveAccount &&
            link.route !== ROUTES.login
          }
        />
      ))}
    </Styled.LinksWrapper>
  );
};
