import { FC } from 'react';

import { getFirstLetterUppercase } from 'services/utils';

import { StatusLabelStyles } from './StatusLabel.style';

export interface IStatusLabelProps {
  status: TStatuses;
  text?: string;
}

export const StatusLabel: FC<IStatusLabelProps> = (props) => {
  const { status } = props;

  const upperText = getFirstLetterUppercase(status);

  return (
    <StatusLabelStyles.Label color={status}>
      {upperText}
    </StatusLabelStyles.Label>
  );
};
