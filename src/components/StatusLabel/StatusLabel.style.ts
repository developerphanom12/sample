import { styled } from 'styles/theme';

import { STATUS_COLORS } from 'constants/status-colors';

const COLORS = STATUS_COLORS;

export const StatusLabelStyles = {
  Label: styled.div<{ color: keyof typeof Statuses }>`
    width: 100%;
    height: 31px;
    border-radius: ${(props) => props.theme.size.borderRadius};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-left: 9px;
    padding-right: 9px;
    box-shadow: 0px 1px 1px ${(props) => props.theme.colors.boxShadowPureBlack};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightGray};
    ${(props) => props.color && COLORS[props.color]};
  `,
};
