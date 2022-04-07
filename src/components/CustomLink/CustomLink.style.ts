import { styled } from 'app/theme';

import { Link, PathMatch } from 'react-router-dom';

export const CustomLinkStyles = {
  Link: styled(Link)<{ active: PathMatch<string> | null }>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.size.xnormal};
    font-weight: ${(props) =>
      props.active
        ? props.theme.fontWeight.semiBold
        : props.theme.fontWeight.medium};
    background-color: ${(props) =>
      props.active ? props.theme.colors.white : ''};
    color: ${(props) =>
      props.active ? props.theme.colors.orange : props.theme.colors.white};
  `,
};
