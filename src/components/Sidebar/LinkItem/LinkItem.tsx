import { FC } from 'react';
import { useLinkItemState } from './LinkItem.state';

import { LinkItemStyles } from './LinkItem.style';

interface ILinkItemProps {
  exact?: boolean;
  onClick?: () => void;
  title: string;
  path: string;
}

export const LinkItem: FC<ILinkItemProps> = (props) => {
  const { path, title, exact, onClick } = props;
  const isActive = useLinkItemState({ path, exact });

  return (
    <LinkItemStyles.Link
      data-testid="link-item"
      onClick={onClick}
      to={path}
      active={isActive}
    >
      {title}
    </LinkItemStyles.Link>
  );
};
