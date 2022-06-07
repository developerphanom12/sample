import { FC } from 'react';

import { getFirstLetterUppercase } from 'services/utils';

import { StatusBarStyles } from './StatusBar.style';

interface IStatusBarProps {
  status?: TStatuses;
}
export const StatusBar: FC<IStatusBarProps> = (props) => {
  const { status } = props;

  const upperText = status && getFirstLetterUppercase(status);

  return (
    <StatusBarStyles.MainWrapper status={status}>
      {upperText}
    </StatusBarStyles.MainWrapper>
  );
};
