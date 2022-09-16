import { styled } from 'styles/theme';

import { STATUS_COLORS } from 'constants/status-colors';

const COLORS = STATUS_COLORS;

export const StatusBarStyles = {
  MainWrapper: styled.div<{ status?: keyof typeof Statuses }>`
    box-shadow: ${({ theme }) =>
      `0px 1px 1px ${theme.colors.halfTranparentBlack}`};
    height: 35px;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.size.default};
    ${({ status }) => (status ? COLORS[status] : COLORS.review)};
    border: ${({ theme }) => `1px solid ${theme.colors.opacityBlack}`};
    display: flex;
    align-items: center;
  `,
};
