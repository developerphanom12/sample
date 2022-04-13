import React from 'react';

import { StatusLabelStyles } from './StatusLabel.style';

export interface StatusLabelProps {
  colors:
    | 'processing'
    | 'review'
    | 'completed'
    | 'decline'
    | 'awaitingApproval'
    | 'approved'
    | 'departures';
  text?: string;
}

export const StatusLabel = (props: StatusLabelProps) => {
  const { colors, text } = props;

  const upperText = colors.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );

  return (
    <StatusLabelStyles.Label colors={colors}>{text}</StatusLabelStyles.Label>
  );
};
