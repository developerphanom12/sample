import { FC } from 'react';

import { CustomLink } from 'components/CustomLink/CustomLink';
import { Notification } from 'components/Notification/Notification';
import { Avatar } from 'components/Avatar/Avatar';

import { HeaderStyles as Styled } from './Header.style';
import { Icon } from '../Icons';

import { ADMIN_LINKS, CUSTOMER_LINKS } from 'constants/header-links';
import { ROUTES } from 'constants/routes';

export interface HeaderProps {
  role: 'admin' | 'customer';
}

export const Header: FC<HeaderProps> = (props) => {
  const { role } = props;
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Link to={ROUTES.home}>
          <Styled.LogoWrapper>
            <Styled.LogoIconWrapper>
              <Icon type="receiptHubLogo" />
            </Styled.LogoIconWrapper>
            <Styled.Title>ReceiptHub</Styled.Title>
          </Styled.LogoWrapper>
        </Styled.Link>
        <Styled.BlocksWrapper>
          <Styled.Links>
            <Styled.LinkWrapper>
              {role === 'admin'
                ? ADMIN_LINKS.map((link) => (
                    <CustomLink
                      key={link.title}
                      to={link.route}
                      isLast={link.isLast}
                      tabs={link.tabs}
                    >
                      {link.title}
                    </CustomLink>
                  ))
                : CUSTOMER_LINKS.map((link) => (
                    <CustomLink key={link.title} to={link.route}>
                      {link.title}
                    </CustomLink>
                  ))}
            </Styled.LinkWrapper>
          </Styled.Links>
          <Styled.Notifications>
            <Styled.Link to={ROUTES.settings}>
              <Avatar />
            </Styled.Link>
          </Styled.Notifications>
        </Styled.BlocksWrapper>
      </Styled.Container>
    </Styled.Header>
  );
};
