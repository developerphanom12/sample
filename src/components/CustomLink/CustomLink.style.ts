import { styled } from 'app/theme';

import { Link, PathMatch } from 'react-router-dom';

export const CustomLinkStyles = {
  Link: styled(Link)<{ active: PathMatch<string> | null; is_last?: string }>`
    position: relative;
    max-width: 110px;
    min-width: 80px;
    &:first-child {
      padding: 0 10px;
    }
    min-width: ${({ is_last }) => is_last === 'true' && '140px'};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    padding: ${(props) => props.active && '0 10px'};
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
  TabsWrapper: styled.ul`
    display: flex;
    position: absolute;
    cursor: default;
    bottom: -39px;
    left: 10px;
  `,
};
