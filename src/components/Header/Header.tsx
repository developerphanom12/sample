import React from "react";

import { HeaderStyles } from "./Header.style";
import { CustomLink } from "components/CustomLink/CustomLink";
import { Notification } from "components/Notification/Notification";
import { Avatar } from "components/Avatar/Avatar";

import { ADMIN_LINKS, CUSTOMER_LINKS } from "constants/header-links";

export interface HeaderProps {
  role: "admin" | "customer";
}

export const Header = (props: HeaderProps) => {
  const { role } = props;
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Links>
        <HeaderStyles.LinkWrapper>
          {role === "admin"
            ? ADMIN_LINKS.map((link) => (
                <CustomLink to={link.route}>{link.title}</CustomLink>
              ))
            : CUSTOMER_LINKS.map((link) => (
                <CustomLink to={link.route}>{link.title}</CustomLink>
              ))}
        </HeaderStyles.LinkWrapper>
      </HeaderStyles.Links>
      <HeaderStyles.Notifications>
        <Notification />
        <Avatar />
      </HeaderStyles.Notifications>
    </HeaderStyles.Container>
  );
};
