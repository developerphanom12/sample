import React from "react";

import { StatusLabelStyles } from "./StatusLabel.style";

export interface StatusLabelProps {
  colors:
    | "processing"
    | "review"
    | "completed"
    | "decline"
    | "awaitingApproval"
    | "approved";
}

export const StatusLabel = (props: StatusLabelProps) => {
  const { colors } = props;

  const upperText = colors.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );

  return (
    <StatusLabelStyles.Label colors={colors}>
      {upperText}
    </StatusLabelStyles.Label>
  );
};
