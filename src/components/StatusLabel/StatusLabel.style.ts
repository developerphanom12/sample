import { styled } from 'styles/theme';

import { STATUS_COLORS } from 'constants/status-colors';

const COLORS = STATUS_COLORS;

export const StatusLabelStyles = {
  Label: styled.div<{ color: keyof typeof Statuses }>`
    width: 100%;
    padding: 16px 0 6px 9px;
    font-size: ${(props) => props.theme.size.default};
    ${(props) => props.color && COLORS[props.color]};
  `,
};
