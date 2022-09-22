import { FC } from 'react';

import { AvatarSubmenuStyles as Styled } from './AvatarSubmenu.style';
import { Icon } from '../../Icons';

import { ROUTES } from 'constants/routes';

interface ISubmenuProps {
  menuItems?: {
    title: string;
    route: ROUTES;
    iconName: string;
    onClick?: () => void;
  }[];
}
export const AvatarSubmenu: FC<ISubmenuProps> = (props) => {
  const { menuItems } = props;

  return (
    <Styled.Wrapper>
      {menuItems?.map((item) => (
        <Styled.Item key={item.title} to={item.route} onClick={item.onClick}>
          <Styled.IconWrapper>
            <Icon type={item.iconName} />
          </Styled.IconWrapper>
          {item.title}
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
};
