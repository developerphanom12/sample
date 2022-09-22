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
    max-height: 55px;
    min-height: 50px;
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) =>
      props.active
        ? props.theme.fontWeight.semiBold
        : props.theme.fontWeight.normal};
    color: ${(props) =>
      props.active
        ? props.theme.colors.darkRed
        : props.theme.colors.lightBlack};
    border-bottom: ${({ theme }) =>
      ` 1px solid ${theme.colors.boxShadowBlack}`};
    padding-left: 50px;
    margin: 0;
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      background: ${(props) => props.theme.colors.pink};
      color: ${(props) => props.theme.colors.lightBlack};
    }
    pointer-events: ${({ is_disabled }) => is_disabled && 'none'};
    color: ${({ is_disabled, theme }) => is_disabled && theme.colors.gray};
  `,
};
