import { css } from "styled-components";

export const STATUS_COLORS = {
  processing: css`
    background-color: ${(props) => props.theme.colors.blue};
  `,
  review: css`
    background-color: ${(props) => props.theme.colors.mango};
  `,
  accepted: css`
    background-color: ${(props) => props.theme.colors.green};
  `,
  rejected: css`
    background-color: ${(props) => props.theme.colors.orange};
  `,
};