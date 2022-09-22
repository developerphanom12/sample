import { Link, PathMatch } from 'react-router-dom';
import { styled } from 'styles/theme';

export const LinkItemStyles = {
  Link: styled(Link)<{
    active?: PathMatch<string> | null | string;
    is_last?: string;
    is_disabled?: string;
  }>`
    width: 100%;
    height: 100%;
    max-height: 60px;
    min-height: 55px;
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.size.xnormal};
    font-weight: ${(props) =>
      props.active
        ? props.theme.fontWeight.semiBold
        : props.theme.fontWeight.normal};
    color: ${(props) =>
      props.active ? props.theme.colors.darkRed : props.theme.colors.lightBlack};
    border-bottom: ${({ theme }) =>
      ` 1px solid ${theme.colors.boxShadowBlack}`};
    padding-left: 50px;
    margin: 0;
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      background: ${(props) => props.theme.colors.darkRed};
      color: ${(props) => props.theme.colors.white};
    }
    pointer-events: ${({ is_disabled }) => is_disabled && 'none'};
    color: ${({ is_disabled, theme }) => is_disabled && theme.colors.gray};
  `,
};
