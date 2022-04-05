import { styled } from "app/theme";

import { Link, PathMatch } from "react-router-dom";

export const CustomLinkStyles = {
  Link: styled(Link)<{ isActive: PathMatch<string> | null }>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.size.xnormal};
    font-weight: ${(props) =>
      props.isActive
        ? props.theme.fontWeight.semiBold
        : props.theme.fontWeight.medium};
    background-color: ${(props) =>
      props.isActive ? props.theme.colors.white : ""};
    color: ${(props) =>
      props.isActive ? props.theme.colors.orange : props.theme.colors.white};
  `,
};
