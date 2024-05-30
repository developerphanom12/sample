import { styled } from 'styles/theme';

import { Link, PathMatch } from 'react-router-dom';

export const CustomLinkStyles = {
  Link: styled(Link)<{
    active: PathMatch<string> | null;
    is_last?: string;
    is_sales?: boolean;
    is_disabled?: string;
  }>`
    position: relative;
    max-width: 110px;
    min-width: 80px;
    min-width: ${({ is_last }) => is_last === 'true' && '120px'};
    min-width: ${({ is_sales }) => is_sales && '110px'};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) =>
      props.active
        ? props.theme.fontWeight.semiBold
        : props.theme.fontWeight.normal};
    background-color: ${(props) =>
      props.active ? props.theme.colors.white : ''};
    color: ${(props) =>
      props.active ? props.theme.colors.darkRed : props.theme.colors.lightGray};
    pointer-events: ${({ is_disabled }) => is_disabled && 'none'};
    color: ${({ is_disabled, theme }) => is_disabled && theme.colors.gray};
    border-radius: 0px;
  `,
};
