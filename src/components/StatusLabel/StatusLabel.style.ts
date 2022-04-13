import { css } from 'styled-components';

import { styled } from 'app/theme';

import { StatusLabelProps } from './StatusLabel';

const COLORS = {
  processing: css`
    background-color: ${(props) => props.theme.colors.blue};
  `,
  review: css`
    background-color: ${(props) => props.theme.colors.mango};
  `,
  completed: css`
    background-color: ${(props) => props.theme.colors.green};
  `,
  decline: css`
    background-color: ${(props) => props.theme.colors.orange};
  `,
  awaitingApproval: css`
    background-color: ${(props) => props.theme.colors.darkGray};
  `,
  approved: css`
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
  `,
  departures: css`
    background-color: ${(props) => props.theme.colors.transparentOrange};
    color: ${(props) => props.theme.colors.black};
  `,
};

export const StatusLabelStyles = {
  Label: styled.div<StatusLabelProps>`
    width: 100%;
    min-width: 135px;
    height: 31px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding-left: 9px;
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightGray};
    ${(props) => props.colors && COLORS[props.colors]};
  `,
};
